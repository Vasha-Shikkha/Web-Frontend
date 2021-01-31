import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import PropTypes from "prop-types";
import colors from "../../../styles/colors";
import styles from "./styles";

const FillInTheBlanksCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			let answer = {users_answer: [], isCorrect: true};

			let jdx = 0;
			for (let i = 0; i < tokenizedQuestion.length; i++) {
				if (isBlank[i]) {
					if (tokenizedQuestion[i] !== props.question.answer[jdx]) {
						answer.isCorrect = false;
					}

					answer.users_answer.push(tokenizedQuestion[i] !== "_" ? tokenizedQuestion[i] : "");
					jdx++;
				}
			}

			return answer;
		},
	}));

	const classes = styles();
	const [tokenizedQuestion, setTokenizedQuestion] = useState([]);
	const [optionMapping, setOptionMApping] = useState([]);
	const [isBlank, setIsBlank] = useState([]);

	useEffect(() => {
		parseData();

		// this array will save ith option is in which blank
		setOptionMApping(props.question.options.map(() => -1));
	}, []);

	const parseData = () => {
		let splited_word = props.question.question.split(" ");
		console.log(splited_word);
		let final_words = [];
		let blankIdx = [];

		for (let i = 0; i < splited_word.length; i++) {
			if (splited_word[i].match(/_[.,?!]/g)) {
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
	};

	const selectOption = (idx) => {
		let temp_tokenized_question = [...tokenizedQuestion];
		let arr = [...optionMapping];

		if (optionMapping[idx] === -1) {
			for (let i = 0; i < isBlank.length; i++) {
				if (isBlank[i] && tokenizedQuestion[i] === "_") {
					temp_tokenized_question[i] = props.question.options[idx];
					arr[idx] = i;
					break;
				}
			}
		} else {
			temp_tokenized_question[optionMapping[idx]] = "_";
			arr[idx] = -1;
		}

		setTokenizedQuestion(temp_tokenized_question);
		setOptionMApping(arr);
	};

	// // determine the color of the option boxes
	// const determineOptionColor = (val) => {
	// 	if (!props.isChecked && !props.isReview) return colors.white;
	// 	else {
	// 		// when checked, users_answer is updated so we use that data
	// 		if (props.question.users_answer === val && props.question.answer === val)
	// 			return colors.correct;
	// 		else if (props.question.users_answer === val && props.question.answer !== val)
	// 			return colors.incorrect;
	// 		else if (props.question.users_answer !== val && props.question.answer === val)
	// 			return colors.correct;
	// 		else return colors.white;
	// 	}
	// };

	return (
		<div
			style={{zIndex: props.elevation ? props.elevation : 0}}
			className={props.moveAway === false ? classes.root : `${classes.root} ${classes.transition}`}>
			<div className={classes.context}>{props.question.context}</div>
			<div className={classes.optionContainer}>
				{props.question.options.map((obj, idx) => (
					<div
						className={`${classes.box} ${optionMapping[idx] === -1 ? classes.lo : classes.hi}`}
						key={idx}
						onClick={() => selectOption(idx)}>
						{obj}
					</div>
				))}
			</div>
			<div className={classes.questionContainer}>
				{tokenizedQuestion.map((obj, idx) =>
					obj === "\n" ? (
						<div key={idx} style={{flexBasis: "100%", marginBottom: 20}}></div>
					) : (
						<div
							key={idx}
							className={classes.word}
							style={isBlank[idx] && obj !== "_" ? {borderBottom: "1px solid black"} : null}>
							{obj === "_" ? "_______" : obj}
						</div>
					)
				)}
			</div>
		</div>
	);
});

FillInTheBlanksCard.propTypes = {
	question: PropTypes.object.isRequired,
	moveAway: PropTypes.bool,
	elevation: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default FillInTheBlanksCard;
