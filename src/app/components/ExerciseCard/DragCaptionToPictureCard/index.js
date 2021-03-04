import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import PropTypes from "prop-types";
import colors from "../../../styles/colors";
import styles from "./styles";

const FillInTheBlanksCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			let answer = {users_answer: [], isCorrect: true};
			let temp_color = [...wordColor];

			let jdx = 0;
			for (let i = 0; i < tokenizedQuestion.length; i++) {
				if (isBlank[i]) {
					if (tokenizedQuestion[i] !== props.question.answer[jdx]) {
						answer.isCorrect = false;
						temp_color[i] = colors.incorrect;
					} else temp_color[i] = colors.correct;

					answer.users_answer.push(tokenizedQuestion[i] !== "_" ? tokenizedQuestion[i] : "");
					jdx++;
				}
			}

			setWordColor(temp_color);

			return answer;
		},
	}));

	const classes = styles();

	const [tokenizedQuestion, setTokenizedQuestion] = useState([]);
	const [isBlank, setIsBlank] = useState([]);
	const [wordColor, setWordColor] = useState([]);

	useEffect(() => {
		let splited_word = props.question.question.split(" ");
		let final_words = [];
		let blankIdx = [];

		for (let i = 0; i < splited_word.length; i++) {
			if (splited_word[i].match(/_[.,?!]*/g)) {
				final_words.push("_");
				blankIdx.push(true);

				if (splited_word[i].length > 1) {
					final_words.push(splited_word[i][1]);
					blankIdx.push(false);
				}
			} else if (splited_word[i] !== "") {
				final_words.push(splited_word[i]);
				blankIdx.push(false);
			}

			if (splited_word[i][splited_word[i].length - 1] === "\n") {
				final_words.push("\n");
				blankIdx.push(false);
			}
		}

		setTokenizedQuestion(final_words);
		setIsBlank(blankIdx);
		setWordColor(final_words.map(() => "white"));
	}, [props.question.question, props.question.options]);

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;

		console.log(result);

		// option~whatever_option_provided
		// adding option~ to make unique draggableId
		let dragged_option = result.draggableId.split("~")[1];
		let dropped_idx = parseInt(result.destination.index);

		let items = [...tokenizedQuestion];
		items[dropped_idx] = dragged_option;
		setTokenizedQuestion(items);
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<div className={classes.root}>
				<div className={classes.context}>{props.question.context}</div>
				<div className={classes.optionContainer}>
					<Droppable droppableId="option_container" direction="horizontal" isDropDisabled={true}>
						{(provided) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
								className={`${classes.optionContainer}`}>
								{props.question.options.map((obj, idx) => (
									<Draggable key={idx} draggableId={`option~${obj}`} index={idx}>
										{(provided2) => {
											return (
												<div
													ref={provided2.innerRef}
													{...provided2.draggableProps}
													{...provided2.dragHandleProps}
													className={classes.box}>
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
				<div className={classes.questionContainer}>
					{tokenizedQuestion.map((obj, idx) =>
						obj === "\n" ? (
							<div key={idx} style={{flexBasis: "100%", marginBottom: 20}}></div>
						) : isBlank[idx] ? (
							<Droppable
								key={idx}
								droppableId={`drop_blank~${idx.toString()}`}
								direction="horizontal">
								{(provided) => (
									<div {...provided.droppableProps} ref={provided.innerRef}>
										<Draggable
											key={idx}
											draggableId={`drag_blank${idx.toString()}`}
											index={idx}
											isDragDisabled={true}>
											{(provided2) => {
												return (
													<div
														ref={provided2.innerRef}
														{...provided2.draggableProps}
														{...provided2.dragHandleProps}
														className={classes.word}
														style={{
															borderBottom: isBlank[idx] && obj !== "_" ? "2px solid black" : null,
															background: wordColor[idx],
														}}>
														{obj === "_" ? "_______" : obj}
													</div>
												);
											}}
										</Draggable>

										{provided.placeholder}
									</div>
								)}
							</Droppable>
						) : (
							<div
								key={idx}
								className={classes.word}
								style={{
									background: wordColor[idx],
								}}>
								{obj}
							</div>
						)
					)}
				</div>
			</div>
		</DragDropContext>
	);
});

FillInTheBlanksCard.propTypes = {
	question: PropTypes.object.isRequired,
	currentQuestionNumber: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default FillInTheBlanksCard;
