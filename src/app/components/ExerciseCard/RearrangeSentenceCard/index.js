import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import PropTypes from "prop-types";
import {shuffle} from "../../../util/helpers";
import styles from "./styles";

const RearrangeSentenceCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			// let ret = {
			// 	isCorrect: answer.join("") === props.question.answer,
			// 	users_answer: answer.join(""),
			// };
			// return ret;
		},
	}));

	const classes = styles();
	const [shuffled, setShuffled] = useState([]);

	useEffect(() => {
		setShuffled(shuffle(props.question.sentences).map((obj) => obj));
	}, [props.question.sentences]);

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;

		// swap
		if (result.destination.droppableId === result.source.droppableId) {
			// if (result.destination.droppableId === "question_container") {
			// 	let temp = [...question];
			// 	let word = temp[result.source.index];
			// 	temp[result.source.index] = temp[result.destination.index];
			// 	temp[result.destination.index] = word;
			// 	setQuestion(temp);
			// } else {
			// 	let temp = [...answer];
			// 	let word = temp[result.source.index];
			// 	temp[result.source.index] = temp[result.destination.index];
			// 	temp[result.destination.index] = word;
			// 	setAnswer(temp);
			// }
		}
	};

	return (
		<div className={classes.root}>
			<div className={classes.context}>{props.question.context}</div>
			<div className={`${classes.contextImageContainer} ${classes.centered}`}>
				<img className={classes.contextImage} src={props.question.contextImage} alt="" />
			</div>
		</div>
	);
});

RearrangeSentenceCard.propTypes = {
	question: PropTypes.object.isRequired,
	thisQuestionNumber: PropTypes.number,
	currentQuestionNumber: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default RearrangeSentenceCard;
