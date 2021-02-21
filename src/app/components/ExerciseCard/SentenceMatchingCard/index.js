import React, {useState, useEffect, forwardRef, useImperativeHandle} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import PropTypes from "prop-types";
import {shuffle} from "../../../util/helpers";
import colors from "../../../styles/colors";
import styles from "./styles";

const SentenceMatchingCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			// let answer = {users_answer: [], isCorrect: correct === currentSentences.length / 2};
			// return answer;
		},
	}));

	const classes = styles();
	const [rightSentenceMapping, setRightSentenceMapping] = useState([]);
	const [boxColors, setBoxColors] = useState([]);
	const [draggedIdx, setDraggedIdx] = useState(-1);
	const [movable, setMovable] = useState([]);
	const [correct, setCorrect] = useState(0);

	useEffect(() => {
		// keep the left part as it is. make them draggable. make the whole container non-droppable
		// shuffle the right part
		let shuffled_array = props.question.sentences.map((obj, idx) => idx);
		shuffled_array = shuffle(shuffled_array);

		setRightSentenceMapping(shuffled_array);
	}, [props.question.sentences]);

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;

		console.log(result);
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<div className={classes.root}>
				<div
					className={classes.optionContainer}
					style={{background: "yellow", alignContent: "flex-start", alignItems: "flex-start"}}>
					<Droppable droppableId="left_part_container" isDropDisabled={false}>
						{(provided) => (
							<div {...provided.droppableProps} ref={provided.innerRef} style={{width: "100%"}}>
								{props.question.sentences.map((obj, idx) => (
									<Draggable key={idx} draggableId={`left~${obj.left_part}`} index={idx}>
										{(provided2) => {
											return (
												<div
													ref={provided2.innerRef}
													{...provided2.draggableProps}
													{...provided2.dragHandleProps}
													className={classes.options}>
													{obj.left_part}
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
				<div
					className={classes.optionContainer}
					style={{background: "cyan", alignContent: "flex-end", alignItems: "flex-end"}}>
					right
				</div>
			</div>
		</DragDropContext>
	);
});

SentenceMatchingCard.propTypes = {
	question: PropTypes.object.isRequired,
	currentQuestionNumber: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default SentenceMatchingCard;
