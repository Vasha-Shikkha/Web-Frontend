import React, {useEffect, useState, useRef} from "react";
import {useHistory} from "react-router-dom";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import JumbledWordCard from "../../components/ExerciseCard/JumbledWordCard";

import styles from "../../styles/exerciseViewStyles";
import {Dialog} from "@material-ui/core";
import "../../styles/answerContainer.css";

const JumbledWord = (props) => {
	const classes = styles();
	const history = useHistory();
	const [question, setQuestion] = useState([]);
	const [taskDetail, setTaskDetail] = useState({});
	const [checked, setChecked] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [loading, setLoading] = useState(true);
	const [showVerdict, setShowVerdict] = useState(false);
	const [correct, setCorrect] = useState(true);
	const [tried, setTried] = useState(0);
	const [open, setOpen] = useState(false);

	const childRef = useRef();

	useEffect(() => {
		const {task} = props.location.state;

		if (task) {
			setQuestion(task.question);
			setChecked(task.question.map(() => (task.taskDetail.solved_status ? true : false)));
			setTaskDetail(task.taskDetail);
			setCurrentQuestion(0);
			setLoading(false);
		}
	}, [props.location.state]);

	const skip = () => {
		check();
	};

	const check = () => {
		let answer = childRef.current.check();

		// mark this question as checked
		let arr = [...checked];
		arr[currentQuestion] = true;
		setChecked(arr);

		// show verdict
		setShowVerdict(true);
		setCorrect(answer.isCorrect);
	};

	const tryAgain = () => {
		// hide verdict
		setShowVerdict(false);

		// mark this checked question as un-checked
		let arr = [...checked];
		arr[currentQuestion] = false;
		setChecked(arr);

		// increase the tried
		setTried(tried + 1);

		// set the question again so that the component mounts again and resets
		setCurrentQuestion(currentQuestion);
	};

	const showAnswer = () => {
		setOpen(true);
	};

	const getNext = () => {
		// hide verdict
		setShowVerdict(false);

		// gameover
		if (currentQuestion + 1 === question.length) {
			history.goBack();
		} else {
			setCurrentQuestion(currentQuestion + 1);
		}
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Dialog open={open} onClose={handleClose} maxWidth={false}>
				{open && (
					<div id="answerContainer" className={classes.answerContainer}>
						<JumbledWordCard
							currentQuestionNumber={currentQuestion}
							question={question[currentQuestion]}
							isReview={true}
							isChecked={true}
							taskDetail={taskDetail}
							tried={tried}
						/>
					</div>
				)}
			</Dialog>

			{loading ? (
				<Loading />
			) : (
				<ExerciseLayout
					exerciseName="Jumbled Word"
					scrollable={true}
					totalQuestions={question.length}
					currentQuestionNumber={currentQuestion + 1}
					skip={skip}
					check={check}
					correct={correct}
					anime={showVerdict}
					tryAgain={tryAgain}
					showAnswer={showAnswer}
					getNext={getNext}>
					<div className={`${classes.scrollableRoot} ${classes.centered}`}>
						<JumbledWordCard
							ref={childRef}
							currentQuestionNumber={currentQuestion}
							question={question[currentQuestion]}
							isReview={taskDetail.solved_status ? taskDetail.solved_status : false}
							isChecked={checked[currentQuestion]}
							taskDetail={taskDetail}
							tried={tried}
						/>
					</div>
				</ExerciseLayout>
			)}
		</>
	);
};

export default JumbledWord;
