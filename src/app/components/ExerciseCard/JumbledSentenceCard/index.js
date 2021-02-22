import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import PropTypes from "prop-types";
import styles from "./styles";

const JumbledSentenceCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			let answer = {isCorrect: true, users_answer: ""};

			// for (let i = 0; i < usersAnswer.length; i++) {
			// 	answer.users_answer += props.question.chunks[usersAnswer[i]];
			// }

			// answer.isCorrect = answer.users_answer === props.question.answer;
			return answer;
		},
	}));

	const classes = styles();
	const [question, setQuestion] = useState([]);
	const [answer, setAnswer] = useState([]);

	useEffect(() => {
		setQuestion(props.question.chunks.map((obj) => obj));
	}, [props.question.chunks]);

	const handleOnDragEnd = (result) => {
		if (!result.destination) {
			console.log("err", result);
			return;
		}

		// swap
		if (result.destination.droppableId === result.source.droppableId) {
			if (result.destination.droppableId === "question_container") {
				let temp = [...question];
				let word = temp[result.source.index];
				temp[result.source.index] = temp[result.destination.index];
				temp[result.destination.index] = word;
				console.log(temp);
				setQuestion(temp);
			} else {
				let temp = [...answer];
				let word = temp[result.source.index];
				temp[result.source.index] = temp[result.destination.index];
				temp[result.destination.index] = word;
				setAnswer(temp);
			}
		} else {
		}
		console.log(result);
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<div className={classes.root}>
				<div className={classes.context}>{props.question.context}</div>
				<Droppable droppableId="question_container" direction="horizontal" isDropDisabled={false}>
					{(provided) => (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
							className={classes.wordContainer}>
							{question.map((obj, idx) => (
								<Draggable key={idx} draggableId={`question~${idx.toString()}`} index={idx}>
									{(provided2) => {
										return (
											<div
												ref={provided2.innerRef}
												{...provided2.draggableProps}
												{...provided2.dragHandleProps}
												className={classes.options}>
												{obj}
											</div>
										);
									}}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
				<div className={`${classes.answerContainer}`}>
					<div className={classes.lineContainer}>
						<div className={classes.line}>dummy text that is invisible</div>
						<div className={classes.line}>dummy text that is invisible</div>
						<div className={classes.line}>dummy text that is invisible</div>
					</div>
					<div style={{position: "absolute", height: "inherit", width: "100%"}}>
						<Droppable droppableId="answer_container" direction="horizontal" isDropDisabled={false}>
							{(provided) => (
								<div
									{...provided.droppableProps}
									ref={provided.innerRef}
									className={classes.wordContainer}
									style={{position: "absolute", height: "100%", width: "100%"}}>
									{answer.map((obj, idx) => (
										<Draggable key={idx} draggableId={`answer~${idx.toString()}`} index={idx}>
											{(provided2) => {
												return (
													<div
														ref={provided2.innerRef}
														{...provided2.draggableProps}
														{...provided2.dragHandleProps}
														className={classes.options}>
														{obj}
													</div>
												);
											}}
										</Draggable>
									))}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					</div>
				</div>
			</div>
		</DragDropContext>
	);
});

JumbledSentenceCard.propTypes = {
	question: PropTypes.object.isRequired,
	moveAway: PropTypes.bool,
	thisQuestionNumber: PropTypes.number,
	currentQuestionNumber: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default JumbledSentenceCard;
