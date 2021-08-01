import React, {useState, useEffect, forwardRef, useImperativeHandle} from "react";
import PropTypes from "prop-types";
import config from "../../../util/config";
import {Grid} from "@material-ui/core";
import colors from "../../../styles/colors";
import styles from "./styles";

const WordToPictureCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			let answer = {users_answer: selected};

			let answerIdx = -1;
			for (let i = 0; i < props.question.images.length; i++) {
				if (props.question.answer === props.question.images[i]) {
					answerIdx = i;
					break;
				}
			}

			answer.isCorrect = answerIdx === selected;

			return answer;
		},
	}));

	const classes = styles();
	const [selected, setSelected] = useState(-1);

	useEffect(() => {
		setSelected(-1);
	}, [props.currentQuestionNumber, props.question, props.tried]);

	// if not reviewing or done checking then let the user select an option
	const selectOption = (idx) => {
		if (!props.isReview && !props.isChecked) {
			if (selected === idx) setSelected(-1);
			else setSelected(idx);
		}
	};

	// determine the color of the option boxes
	const determineOptionColor = (idx) => {
		if (!props.isChecked && !props.isReview) {
			if (selected === idx) return colors.secondary;
			return colors.white;
		} else {
			let answerIdx = -1;
			for (let i = 0; i < props.question.images.length; i++) {
				if (props.question.answer === props.question.images[i]) {
					answerIdx = i;
					break;
				}
			}

			// show the correct answer
			if (props.isReview) {
				if (idx === answerIdx) return colors.correct;
				return colors.white;
			}

			// answered, reviewing
			else {
				if (idx !== selected && idx !== answerIdx) return colors.white;
				if (idx === answerIdx) return colors.correct;
				return colors.incorrect;
			}
		}
	};

	return (
		<div className={classes.root}>
			<div className={`${classes.question}`}>{props.question.question}</div>
			<div className={classes.optionContainer}>
				<Grid container spacing={3}>
					{props.question &&
						props.question.images &&
						props.question.images.map((obj, idx) => (
							<Grid item xs={6} sm={6} md={3} lg={3} xl={3} key={idx}>
								<div
									style={{background: determineOptionColor(idx)}}
									onClick={() => selectOption(idx)}
									className={`${classes.opt} ${classes.centered} ${
										selected === idx ? classes.hi : classes.lo
									}`}>
									<img src={config.IMAGE_BASE + obj} alt="" className={classes.optImage} />
								</div>
							</Grid>
						))}
				</Grid>
			</div>
			{props.isChecked || props.isReview ? (
				<div className={classes.explanation}>{`Explanation: ${props.question.explanation}`}</div>
			) : null}
		</div>
	);
});

WordToPictureCard.propTypes = {
	question: PropTypes.object.isRequired,
	currentQuestionNumber: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
	taskDetail: PropTypes.object.isRequired,
	tried: PropTypes.number.isRequired,
};

export default WordToPictureCard;
