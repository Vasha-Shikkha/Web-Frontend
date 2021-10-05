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
					if (tokenizedQuestion[i].toLowerCase() !== props.question.answers[jdx].toLowerCase()) {
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
		let paragraph = "";
		for (let i = 0; i < props.question.paragraph.length; i++) {
			if (props.question.paragraph[i] === "\n") paragraph += " @ ";
			else paragraph += props.question.paragraph[i];
		}

		paragraph = paragraph.replace(/#/g, " # ");

		let splited_word = paragraph.split(" ");
		let final_words = [];
		let blankIdx = [];

		for (let i = 0; i < splited_word.length; i++) {
			if (splited_word[i] === "@") {
				final_words.push("\n");
				blankIdx.push(false);
			} else if (splited_word[i] === "#") {
				final_words.push("#");
				blankIdx.push(true);
			} else {
				final_words.push(splited_word[i]);
				blankIdx.push(false);
			}
		}

		if (props.isReview) {
			let j = 0;

			for (let i = 0; i < final_words.length; i++) {
				if (blankIdx[i]) final_words[i] = props.question.answers[j++];
			}
		}

		setIsBlank(blankIdx);
		setWordColor(final_words.map(() => "white"));
		setTokenizedQuestion(final_words);
	}, [props.question, props.tried, props.isReview]);

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;

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
									<Draggable
										key={idx}
										draggableId={`option~${obj}`}
										index={idx}
										isDragDisabled={props.isReview || props.isChecked}>
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
															borderBottom: isBlank[idx] && obj !== "#" ? "2px solid black" : null,
															background: wordColor[idx],
															padding: isBlank[idx] && obj !== "#" ? "0px 15px 0px 15px" : null,
														}}>
														{obj === "#"
															? "______________"
															: idx === 0
															? obj[0].toUpperCase() + obj.slice(1)
															: obj}
													</div>
												);
											}}
										</Draggable>
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
				{(props.isChecked || props.isReview) &&
				props.question.explanation &&
				props.showAnswerDialogue ? (
					<div className={classes.explanation}>{`Explanation: ${props.question.explanation}`}</div>
				) : null}
			</div>
		</DragDropContext>
	);
});

FillInTheBlanksCard.propTypes = {
	question: PropTypes.object.isRequired,
	currentQuestionNumber: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
	taskDetail: PropTypes.object.isRequired,
	tried: PropTypes.number.isRequired,
	showAnswerDialogue: PropTypes.bool,
};

export default FillInTheBlanksCard;
