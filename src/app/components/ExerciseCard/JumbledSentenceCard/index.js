import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import PropTypes from "prop-types";
import {shuffle} from "../../../util/helpers";
import styles from "./styles";

const JumbledSentenceCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			let ret = {
				isCorrect: true,
				users_answer: [...answer],
			};
			console.log(answer);
			for (let i = 0; i < answer.length; i++) {
				if (i !== answer[i].idx) {
					ret.isCorrect = false;
					break;
				}
			}

			return ret;
		},
	}));

	const classes = styles();
	const [question, setQuestion] = useState([]);
	const [answer, setAnswer] = useState([]);

	useEffect(() => {
		let temp = [];
		for (let i = 0; i < props.question.chunks.length; i++) {
			temp.push({str: props.question.chunks[i], idx: i});
		}

		temp = shuffle(temp);

		setQuestion(temp);
		setAnswer([]);
	}, [props.question.chunks]);

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;

		// swap
		if (result.destination.droppableId === result.source.droppableId) {
			if (result.destination.droppableId === "question_container") {
				let temp = [...question];
				let word = temp[result.source.index];
				temp[result.source.index] = temp[result.destination.index];
				temp[result.destination.index] = word;

				setQuestion(temp);
			} else {
				let temp = [...answer];
				let word = temp[result.source.index];
				temp[result.source.index] = temp[result.destination.index];
				temp[result.destination.index] = word;

				setAnswer(temp);
			}
		} else {
			let temp_question = [...question];
			let temp_answer = [...answer];

			if (result.source.droppableId === "question_container") {
				let word = temp_question.splice(result.source.index, 1)[0];
				temp_answer.splice(result.destination.index, 0, word);
			} else {
				let word = temp_answer.splice(result.source.index, 1)[0];
				temp_question.splice(result.destination.index, 0, word);
			}

			setQuestion(temp_question);
			setAnswer(temp_answer);
		}
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<div className={classes.root}>
				<div className={classes.context}>{props.question.paragraph}</div>
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
												{obj.str}
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
					<div className={classes.answerContainerInner}>
						<Droppable droppableId="answer_container" direction="horizontal" isDropDisabled={false}>
							{(provided) => (
								<div
									{...provided.droppableProps}
									ref={provided.innerRef}
									className={classes.answerContainerInner}>
									{answer.map((obj, idx) => (
										<Draggable key={idx} draggableId={`answer~${idx.toString()}`} index={idx}>
											{(provided2) => {
												return (
													<div
														ref={provided2.innerRef}
														{...provided2.draggableProps}
														{...provided2.dragHandleProps}
														className={classes.options}>
														{obj.str}
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
	currentQuestionNumber: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default JumbledSentenceCard;
