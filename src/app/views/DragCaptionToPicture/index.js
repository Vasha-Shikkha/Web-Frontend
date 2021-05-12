import React, {useEffect, useState, useRef} from "react";
import {useHistory} from "react-router-dom";
import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import DragCaptionToPictureCard from "../../components/ExerciseCard/DragCaptionToPictureCard";

import styles from "../../styles/exerciseViewStyles";

const DragCaptionToPicture = (props) => {
	const classes = styles();
	const history = useHistory();
	const [question, setQuestion] = useState([]);
	const [taskDetail, setTaskDetail] = useState({});
	const [checked, setChecked] = useState();
	const [loading, setLoading] = useState(true);
	const [showVerdict, setShowVerdict] = useState(false);
	const [correct, setCorrect] = useState(true);

	const childRef = useRef();

	useEffect(() => {
		const {task} = props.location.state;

		if (task) {
			setQuestion(task.question);
			setChecked(task.taskDetail.solved_status ? true : false);
			setTaskDetail(task.taskDetail);
			setLoading(false);
		}
	}, [props.location.state]);

	const skip = () => {
		check();
	};

	const check = () => {
		let answer = childRef.current.check();

		setChecked(true);

		// show verdict
		setShowVerdict(true);
		setCorrect(answer.isCorrect);
	};

	const getNext = () => {
		// hide verdict
		setShowVerdict(false);

		// gameover
		history.goBack();
	};

	return (
		<>
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
					getNext={getNext}>
					<div className={`${classes.scrollableRoot} ${classes.centered}`}>
						<DragCaptionToPictureCard
							ref={childRef}
							question={question}
							isReview={taskDetail.solved_status ? taskDetail.solved_status : false}
							isChecked={checked}
							taskDetail={taskDetail}
						/>
					</div>
				</ExerciseLayout>
			)}
		</>
	);
};

export default DragCaptionToPicture;
