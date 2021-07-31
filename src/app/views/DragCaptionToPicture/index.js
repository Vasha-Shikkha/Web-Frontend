import React, {useEffect, useState, useRef} from "react";
import {useHistory} from "react-router-dom";
import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import DragCaptionToPictureCard from "../../components/ExerciseCard/DragCaptionToPictureCard";
import {updateExerciseStatus} from "../../axios/services/exercises";
import constants from "../../util/constants";
import styles from "../../styles/exerciseViewStyles";
import {Dialog} from "@material-ui/core";
import "../../styles/answerContainer.css";

const DragCaptionToPicture = (props) => {
	const classes = styles();
	const history = useHistory();
	const [question, setQuestion] = useState([]);
	const [taskDetail, setTaskDetail] = useState({});
	const [checked, setChecked] = useState();
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
			setTaskDetail(task.taskDetail);
			setChecked(task.taskDetail.solved_status === constants.EXERCISE_SOLVED);
			setLoading(false);
		}
	}, [props.location.state]);

	const skip = () => {
		check();
	};

	const check = () => {
		let answer = childRef.current.check();

		setChecked(true);

		updateExerciseStatus(taskDetail.task_id, answer.isCorrect, () => {
			// show verdict
			setShowVerdict(true);
			setCorrect(answer.isCorrect);
		});
	};

	const tryAgain = () => {
		// hide verdict
		setShowVerdict(false);

		// mark this checked question as un-checked
		setChecked(false);

		// increase the tried so that the component mounts again and resets stats
		setTried(tried + 1);
	};

	const showAnswer = () => {
		setOpen(true);
	};

	const getNext = () => {
		// hide verdict
		setShowVerdict(false);

		// gameover
		history.goBack();
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Dialog open={open} onClose={handleClose} maxWidth={false}>
				{open && (
					<div id="answerContainer" className={classes.answerContainer}>
						<DragCaptionToPictureCard
							question={question}
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
					exerciseName="Drag Caption to Pictures"
					scrollable={true}
					totalQuestions={question.length}
					currentQuestionNumber={1}
					skip={skip}
					check={check}
					correct={correct}
					anime={showVerdict}
					tryAgain={tryAgain}
					showAnswer={showAnswer}
					getNext={getNext}>
					<div className={`${classes.scrollableRoot} ${classes.centered}`}>
						<DragCaptionToPictureCard
							ref={childRef}
							question={question}
							isReview={taskDetail.solved_status === constants.EXERCISE_SOLVED}
							isChecked={checked}
							taskDetail={taskDetail}
							tried={tried}
						/>
					</div>
				</ExerciseLayout>
			)}
		</>
	);
};

export default DragCaptionToPicture;
