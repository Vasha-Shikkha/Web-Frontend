import React, {useState, useEffect, forwardRef, useImperativeHandle} from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import colors from "../../../styles/colors";
import styles from "./styles";
import "../../../styles/scrollbar.css";

const SentenceMatchingCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			let answer = {users_answer: [], isCorrect: correct === currentSentences.length / 2};
			return answer;
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
					left
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
