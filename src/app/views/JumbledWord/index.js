import React, {useEffect, useState, useRef} from "react";
import {useHistory} from "react-router-dom";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import JumbledWordCard from "../../components/ExerciseCard/JumbledWordCard";

import styles from "../../styles/exerciseViewStyles";

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

	return (
		<>
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
					getNext={getNext}>
					<div className={`${classes.scrollableRoot} ${classes.centered}`}>
						<JumbledWordCard
							ref={childRef}
							currentQuestionNumber={currentQuestion}
							question={question[currentQuestion]}
							isReview={taskDetail.solved_status ? taskDetail.solved_status : false}
							isChecked={checked[currentQuestion]}
							taskDetail={taskDetail}
						/>
					</div>
				</ExerciseLayout>
			)}
		</>
	);
};

export default JumbledWord;
