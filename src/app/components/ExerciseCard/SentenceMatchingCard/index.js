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
	const [explanation, setExplanation] = useState([]);

	useEffect(() => {
		// keep the left part as it is. make them draggable. make the whole container non-droppable
		// shuffle the right part
		let shuffled_array = props.question.map((obj, idx) => idx);

		// if review then no need to shuffle
		if (!props.isReview) shuffled_array = shuffle(shuffled_array);

		setRightSentenceMapping(shuffled_array);
		setLeftUsed(shuffled_array.map(() => false));
		setRightUsed(shuffled_array.map(() => false));
		setCurrentRight(shuffled_array.map((obj) => props.question[obj].part_two));
		setBoxColors(shuffled_array.map(() => colors.white));

		let tempExplanation = [];
		for (var obj of props.question) {
			if (obj.explanation) {
				tempExplanation.push(obj.part_one + " " + obj.part_two + " - " + obj.explanation);
			}
		}

		setExplanation(tempExplanation);
	}, [props.question, props.tried, props.isReview]);

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
		if (stack.length === 0 || props.isChecked || props.review || disableUndo) return;

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
				{!props.isReview && <Button text="Undo" styles={classes.undo} onClick={() => undo()} />}

				<div className={classes.optionsOuter}>
					<div
						className={classes.optionContainer}
						style={{alignContent: "flex-start", alignItems: "flex-start"}}>
						<Droppable droppableId="part_one_container" isDropDisabled={true}>
							{(provided) => (
								<div {...provided.droppableProps} ref={provided.innerRef} style={{width: "100%"}}>
									{props.question &&
										props.question.map((obj, idx) => (
											<Draggable
												key={idx}
												draggableId={`left~${obj.part_one}`}
												index={idx}
												isDragDisabled={leftUsed[idx] || props.isReview || props.isChecked}>
												{(provided2) => {
													return (
														<div
															contentEditable="false"
															dangerouslySetInnerHTML={{
																__html: leftUsed[idx] ? null : obj.part_one,
															}}
															ref={provided2.innerRef}
															{...provided2.draggableProps}
															{...provided2.dragHandleProps}
															className={classes.options}></div>
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
						{props.question &&
							props.question.map((obj, idx) => (
								<Droppable
									key={idx}
									droppableId={`right_sentence~${idx}`}
									isDropDisabled={rightUsed[idx] || props.isReview || props.isChecked}>
									{(provided) => (
										<div
											{...provided.droppableProps}
											ref={provided.innerRef}
											style={{width: "100%"}}>
											<Draggable
												draggableId={`right~${obj.part_two}`}
												index={idx}
												isDragDisabled={true}>
												{(provided2) => {
													return (
														<div
															contentEditable="false"
															dangerouslySetInnerHTML={{
																__html: currentRight[idx] ? currentRight[idx] : "",
															}}
															ref={provided2.innerRef}
															{...provided2.draggableProps}
															{...provided2.dragHandleProps}
															className={classes.options}
															style={{
																background: boxColors[idx],
															}}></div>
													);
												}}
											</Draggable>
										</div>
									)}
								</Droppable>
							))}
					</div>
				</div>
				{(props.isChecked || props.isReview) &&
				explanation.length &&
				props.showAnswerDialogue > 0 ? (
					<div className={classes.explanation}>
						Explanation:
						<br />
						{explanation.map((obj, idx) => (
							<>
								<div key={idx}>{obj}</div>
								<br />
							</>
						))}
					</div>
				) : null}
			</div>
		</DragDropContext>
	);
});

SentenceMatchingCard.propTypes = {
	question: PropTypes.array.isRequired,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
	taskDetail: PropTypes.object.isRequired,
	tried: PropTypes.number.isRequired,
	showAnswerDialogue: PropTypes.bool,
};

export default SentenceMatchingCard;
