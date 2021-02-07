import React, {useState, useEffect, forwardRef, useImperativeHandle} from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import colors from "../../../styles/colors";
import styles from "./styles";
import "../../../styles/scrollbar.css";

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
	const [boxColors, setBoxColors] = useState([]);
	const [draggedIdx, setDraggedIdx] = useState(-1);
	const [movable, setMovable] = useState([]);
	const [correct, setCorrect] = useState(0);

	useEffect(() => {
		let len = props.question.sentences.length * 2;
		let temp = props.question.sentences.map((obj, idx) => idx);

		// set initial color
		setBoxColors(Array(len).fill(colors.white));

		let temp_sentences = Array(len).fill("");
		let temp_mapping = Array(len).fill(-1);

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
		setMovable(Array(len).fill(true));
	}, [props.question.sentences]);

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

	//-------------------------------------------
	const onDrag = (event, idx) => {
		event.preventDefault();
		setDraggedIdx(idx);
	};

	const onDrop = (idx) => {
		// idx + draggedIdx or draggedIdx + idx
		let temp_movable = [...movable];
		temp_movable[idx] = false;
		temp_movable[draggedIdx] = false;
		setMovable(temp_movable);

		let temp_sentences = [...currentSentences];
		// even index means this is the first part of the sentence
		if (draggedIdx % 2 === 0)
			temp_sentences[idx] = temp_sentences[draggedIdx] + " " + temp_sentences[idx];
		else temp_sentences[idx] += " " + temp_sentences[draggedIdx];
		temp_sentences[draggedIdx] = "";

		let temp_boxColors = [...boxColors];
		if (sentenceMapping[idx] === sentenceMapping[draggedIdx]) {
			temp_boxColors[idx] = colors.correct;
			setCorrect(correct + 1);
		} else temp_boxColors[idx] = colors.incorrect;

		setBoxColors(temp_boxColors);
		setCurrentSentences(temp_sentences);
	};

	const onDragOver = (event, idx) => {
		if (movable[idx]) {
			// first part of the sentence are in the indexes, 0, 2, 4, ....
			// second part of the sentence are in the indexes are on 1, 3, 5, ...
			// we will not let the user drop first + first or second + second
			if (idx % 2 !== draggedIdx % 2) event.preventDefault();
		}
	};
	//-------------------------------------------

	return (
		<div
			style={{
				display: props.thisQuestionNumber === props.currentQuestionNumber ? "initial" : "none",
			}}
			className={
				props.moveAway === false ? `${classes.root}` : `${classes.root} ${classes.transition}`
			}>
			<Grid
				container
				spacing={3}
				wrap="wrap"
				alignItems="center"
				alignContent="center"
				justify="space-between"
				className={classes.optionContainer}>
				{currentSentences.map((obj, idx) => (
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={idx}>
						<div
							style={{background: boxColors[idx]}}
							draggable={movable[idx]}
							onDrag={(event) => onDrag(event, idx)}
							onDrop={() => onDrop(idx)}
							onDragOver={(event) => onDragOver(event, idx)}
							className={`${classes.options} ${classes.centered}`}>
							{obj}
						</div>
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
