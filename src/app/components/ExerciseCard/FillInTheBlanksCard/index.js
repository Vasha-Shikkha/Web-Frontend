import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import colors from "../../../styles/colors";
import styles from "./styles";

const FillInTheBlanksCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			// let answer = {users_answer: selected};
			// if (selected === props.question.answer) answer.isCorrect = true;
			// else answer.isCorrect = false;
			// return answer;
		},
	}));

	const classes = styles();
	const [tokenizedQuestion, setTokenizedQuestion] = useState([]);
	const [blankIndex, setBlankIndex] = useState([]);
	const [optionMapping, setOptionMApping] = useState([]);

	useEffect(() => {
		parseData();

		// this array will save ith option is in which blank
		setOptionMApping(props.question.options.map(() => -1));
	}, []);

	const parseData = () => {
		const splited_word = props.question.question.split(" ");
		const final_words = [];
		const blankIdx = [];

		for (let i = 0; i < splited_word.length; i++) {
			if (splited_word[i] === "_") {
				blankIdx.push(i);
				final_words.push("_______");
			} else if (splited_word[i] !== "") final_words.push(splited_word[i]);

			if (splited_word[i][splited_word[i].length - 1] === "\n") {
				final_words.push("\n");
			}
		}

		setTokenizedQuestion(final_words);
		setBlankIndex(blankIdx);
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
					<div className={classes.box} key={idx}>
						{obj}
					</div>
				))}
			</div>
			<div className={classes.questionContainer}>
				{tokenizedQuestion.map((obj, idx) =>
					obj === "\n" ? (
						<div key={idx} style={{flexBasis: "100%", marginBottom: 20}}></div>
					) : (
						// console.log("found a new line")
						<div key={idx} className={classes.word}>
							{obj}
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
