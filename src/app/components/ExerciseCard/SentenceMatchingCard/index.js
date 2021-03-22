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
			setDisableUndo(true);

			let answer = {users_answer: [], isCorrect: true};

			let temp_color = [...boxColors];
			for (let i = 0; i < temp_color.length; i++) {
				let sen = props.question[rightSentenceMapping[i]];

				if (currentRight[i] === sen.part_one + " " + sen.part_two) temp_color[i] = colors.correct;
				else {
					temp_color[i] = colors.incorrect;
					answer.isCorrect = false;
				}
			}

			setBoxColors(temp_color);
			return answer;
		},
	}));

	const classes = styles();
	const [rightSentenceMapping, setRightSentenceMapping] = useState([]);
	const [currentRight, setCurrentRight] = useState([]);
	const [boxColors, setBoxColors] = useState([]);
	const [leftUsed, setLeftUsed] = useState([]);
	const [rightUsed, setRightUsed] = useState([]);
	const [stack, setStack] = useState([]);
	const [disableUndo, setDisableUndo] = useState(false);

	useEffect(() => {
		// keep the left part as it is. make them draggable. make the whole container non-droppable
		// shuffle the right part
		let shuffled_array = props.question.map((obj, idx) => idx);
		shuffled_array = shuffle(shuffled_array);

		setRightSentenceMapping(shuffled_array);
		setLeftUsed(shuffled_array.map(() => false));
		setRightUsed(shuffled_array.map(() => false));
		setCurrentRight(shuffled_array.map((obj) => props.question[obj].part_two));
		setBoxColors(shuffled_array.map(() => colors.white));
	}, [props.question]);

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;

		let temp = [...leftUsed];
		temp[result.source.index] = true;
		setLeftUsed(temp);

		temp = [...rightUsed];
		temp[result.destination.index] = true;
		setRightUsed(temp);

		temp = [...currentRight];
		temp[result.destination.index] =
			props.question[result.source.index].part_one + " " + currentRight[result.destination.index];
		setCurrentRight(temp);

		temp = [...stack];
		temp.push([result.source.index, result.destination.index]);
		setStack(temp);
	};

	const undo = () => {
		if (stack.length === 0 || props.checked || disableUndo) return;

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
		temp[right] = props.question[rightSentenceMapping[right]].part_two;
		setCurrentRight(temp);

		temp = [...rightUsed];
		temp[right] = false;
		setRightUsed(temp);
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<div className={classes.root}>
				<Button text="Undo" styles={classes.undo} onClick={() => undo()} />

				<div className={classes.optionsOuter}>
					<div
						className={classes.optionContainer}
						style={{alignContent: "flex-start", alignItems: "flex-start"}}>
						<Droppable droppableId="part_one_container" isDropDisabled={true}>
							{(provided) => (
								<div {...provided.droppableProps} ref={provided.innerRef} style={{width: "100%"}}>
									{props.question.map((obj, idx) => (
										<Draggable
											key={idx}
											draggableId={`left~${obj.part_one}`}
											index={idx}
											isDragDisabled={leftUsed[idx]}>
											{(provided2) => {
												return (
													<div
														ref={provided2.innerRef}
														{...provided2.draggableProps}
														{...provided2.dragHandleProps}
														className={classes.options}>
														{leftUsed[idx] ? null : obj.part_one}
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
						{props.question.map((obj, idx) => (
							<Droppable
								key={idx}
								droppableId={`right_sentence~${idx}`}
								isDropDisabled={rightUsed[idx]}>
								{(provided) => (
									<div {...provided.droppableProps} ref={provided.innerRef} style={{width: "100%"}}>
										<Draggable
											draggableId={`right~${obj.part_two}`}
											index={idx}
											isDragDisabled={true}>
											{(provided2) => {
												return (
													<div
														ref={provided2.innerRef}
														{...provided2.draggableProps}
														{...provided2.dragHandleProps}
														className={classes.options}
														style={{
															//height: rightUsed[idx] || props.isReview ? "auto" : 70,
															background: boxColors[idx],
														}}>
														{currentRight[idx] ? currentRight[idx] : ""}
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
	question: PropTypes.array.isRequired,
	currentQuestionNumber: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default SentenceMatchingCard;
