import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import PropTypes from "prop-types";
import {shuffle} from "../../../util/helpers";
import styles from "./styles";

const RearrangeSentenceCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			let answer = {
				isCorrect: true,
				users_answer: [...shuffled],
			};

			for (let i = 0; i < shuffled.length; i++) {
				if (shuffled[i] !== props.question.sentences[i]) {
					answer.isCorrect = false;
					break;
				}
			}
			return answer;
		},
	}));

	const classes = styles();
	const [shuffled, setShuffled] = useState([]);

	useEffect(() => {
		let temp = [...props.question.sentences];
		setShuffled(shuffle(temp).map((obj) => obj));
	}, [props.question.sentences]);

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;

		let temp = [...shuffled];
		let sentence = temp[result.source.index];
		temp[result.source.index] = temp[result.destination.index];
		temp[result.destination.index] = sentence;

		setShuffled(temp);
	};

	return (
		<div className={classes.root}>
			<div className={classes.context}>{props.question.context}</div>
			<div className={`${classes.contextImageContainer} ${classes.centered}`}>
				<img className={classes.contextImage} src={props.question.contextImage} alt="" />
			</div>
			<DragDropContext onDragEnd={handleOnDragEnd}>
				<Droppable droppableId="sentence_container" isDropDisabled={false}>
					{(provided) => (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
							className={classes.sentenceContainer}>
							{shuffled.map((obj, idx) => (
								<Draggable key={idx} draggableId={`sen~${idx.toString()}`} index={idx}>
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
			</DragDropContext>
		</div>
	);
});

RearrangeSentenceCard.propTypes = {
	question: PropTypes.object.isRequired,
	currentQuestionNumber: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default RearrangeSentenceCard;
