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
		if (!result.destination) return;
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
								<Draggable key={idx} draggableId={obj} index={idx}>
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
					{/* <div style={{position: "absolute"}} className={classes.wordContainer}>
						{usersAnswer.map((obj, idx) => (
							<div onClick={() => unuseWord(idx)} className={classes.shuffledWordActive} key={idx}>
								{props.question.chunks[obj]}
							</div>
						))}
					</div> */}
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
