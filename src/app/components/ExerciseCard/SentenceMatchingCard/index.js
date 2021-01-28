import React, {useState, useEffect, forwardRef, useImperativeHandle} from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import colors from "../../../styles/colors";
import styles from "./styles";

const SentenceMatchingCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			// let answer = {users_answer: selected};
			// if (selected === props.question.answer) answer.isCorrect = true;
			// else answer.isCorrect = false;
			// return answer;
		},
	}));

	const classes = styles();
	const [currentSentences, setCurrentSentences] = useState([]);
	const [sentenceMapping, setSentenceMapping] = useState([]);
	const [color, setColor] = useState([]);

	useEffect(() => {
		let temp = props.question.sentences.map((obj, idx) => idx);

		// set initial color
		setColor(props.question.sentences.map(() => colors.white));

		let temp_sentences = props.question.sentences.map(() => "");
		let temp_mapping = props.question.sentences.map(() => -1);

		// fill the first
		temp = shuffle(temp);
		for (let i = 0, j = 0; i < temp.length; i++, j += 2) {
			temp_sentences[j] = props.question.sentences[temp[i]].part_one;
			temp_mapping[j] = temp[i];
		}

		// fill the second
		temp = shuffle(temp);
		for (let i = 0, j = 1; i < temp.length; i++, j += 2) {
			temp_sentences[j] = props.question.sentences[temp[i]].part_two;
			temp_mapping[j] = temp[i];
		}

		setCurrentSentences(temp_sentences);
		setSentenceMapping(temp_mapping);
	}, []);

	const shuffle = (array) => {
		let currentIndex = array.length;
		let temporaryValue;
		let randomIndex;
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	};

	// determine the color of the option boxes
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
			<Grid
				container
				spacing={3}
				wrap="wrap"
				alignItems="stretch"
				alignContent="stretch"
				justify="space-between"
				className={classes.optionContainer}>
				{currentSentences.map((obj, idx) => (
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={idx}>
						<div className={`${classes.options} ${classes.centered}`}>{obj}</div>
					</Grid>
				))}
			</Grid>
		</div>
	);
});

SentenceMatchingCard.propTypes = {
	question: PropTypes.object.isRequired,
	moveAway: PropTypes.bool,
	elevation: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default SentenceMatchingCard;
