import React, {useState, useEffect, forwardRef, useImperativeHandle} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import PropTypes from "prop-types";
import Button from "../../Button";
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
	const [currentRight, setCurrentRight] = useState([]);
	const [boxColors, setBoxColors] = useState([]);
	const [leftUsed, setLeftUsed] = useState([]);
	const [stack, setStack] = useState([]);

	useEffect(() => {
		// keep the left part as it is. make them draggable. make the whole container non-droppable
		// shuffle the right part
		let shuffled_array = props.question.sentences.map((obj, idx) => idx);
		shuffled_array = shuffle(shuffled_array);

		setRightSentenceMapping(shuffled_array);
		setCurrentRight(shuffled_array.map((obj) => props.question.sentences[obj].right_part));
		setBoxColors(shuffled_array.map(() => colors.white));
	}, [props.question.sentences]);

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;

		let temp = [...leftUsed];
		temp[result.source.index] = true;
		setLeftUsed(temp);

		temp = [...currentRight];
		temp[result.destination.index] =
			props.question.sentences[result.source.index].left_part +
			" " +
			currentRight[result.destination.index];
		setCurrentRight(temp);

		temp = [...stack];
		temp.push([result.source.index, result.destination.index]);
		setStack(temp);
	};

	const showMeaning = (word) => {
		console.log(word);
	};

	const undo = () => {
		let temp = [...stack];
		let len = temp.length;
		let left = stack[len - 1][0];
		let right = stack[len - 1][1];
		temp.pop();
		setStack(temp);

		// restore the left
		temp = [...leftUsed];
		temp[left] = false;
		setLeftUsed(temp);

		// restore the right
		temp = [...currentRight];
		temp[right] = props.question.sentences[rightSentenceMapping[right]].right_part;
		setCurrentRight(temp);
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<div className={classes.root}>
				<Button text="Undo" styles={classes.undo} onClick={() => undo()} />

				<div className={classes.optionsOuter}>
					<div
						className={classes.optionContainer}
						style={{alignContent: "flex-start", alignItems: "flex-start"}}>
						<Droppable droppableId="left_part_container" isDropDisabled={true}>
							{(provided) => (
								<div {...provided.droppableProps} ref={provided.innerRef} style={{width: "100%"}}>
									{props.question.sentences.map((obj, idx) => (
										<Draggable
											key={idx}
											draggableId={`left~${obj.left_part}`}
											index={idx}
											isDragDisabled={leftUsed[idx]}>
											{(provided2) => {
												return (
													<div
														ref={provided2.innerRef}
														{...provided2.draggableProps}
														{...provided2.dragHandleProps}
														className={classes.options}>
														{leftUsed[idx]
															? null
															: obj.left_part.split(" ").map((word, wdx) => (
																	<span
																		className={classes.option_span}
																		key={wdx}
																		onMouseOver={() => showMeaning(word)}>
																		{word}
																	</span>
															  ))}
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
						style={{alignContent: "flex-end", alignItems: "flex-end"}}>
						{props.question.sentences.map((obj, idx) => (
							<Droppable key={idx} droppableId={`right_sentence~${idx}`} isDropDisabled={false}>
								{(provided) => (
									<div {...provided.droppableProps} ref={provided.innerRef} style={{width: "100%"}}>
										<Draggable
											draggableId={`right~${obj.right_part}`}
											index={idx}
											isDragDisabled={true}>
											{(provided2) => {
												return (
													<div
														ref={provided2.innerRef}
														{...provided2.draggableProps}
														{...provided2.dragHandleProps}
														className={classes.options}
														style={{height: 70, background: boxColors[idx]}}>
														{currentRight[idx]
															? currentRight[idx].split(" ").map((word, wdx) => (
																	<span
																		className={classes.option_span}
																		key={wdx}
																		onMouseOver={() => showMeaning(word)}>
																		{word}
																	</span>
															  ))
															: ""}
													</div>
												);
											}}
										</Draggable>
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						))}
					</div>
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
