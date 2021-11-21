import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import InstructionContainer from "../../InstructionContainer";
import colors from "../../../styles/colors";
import styles from "./styles";

const MCQCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			let answer = {
				users_answer: selected,
				isCorrect: true,
			};

			let answerIdx = -1;
			for (let i = 0; i < props.question.options.length; i++) {
				if (props.question.answer === props.question.options[i]) {
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

	const selectOption = (idx) => {
		if (!props.isReview && !props.isChecked) {
			if (selected === idx) setSelected(-1);
			else setSelected(idx);
		}
	};

	const determineOptionColor = (idx) => {
		if (!props.isChecked && !props.isReview) {
			if (selected === idx) return colors.secondary;
			return colors.white;
		} else {
			let answerIdx = -1;
			for (let i = 0; i < props.question.options.length; i++) {
				if (props.question.answer === props.question.options[i]) {
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
			<div className={classes.questionContainer}>
				<div
					className={`${classes.question}`}
					contentEditable="false"
					dangerouslySetInnerHTML={{__html: props.question.question}}></div>

				<div className={classes.optionContainer}>
					<Grid container spacing={3}>
						{props.question.options &&
							props.question.options.map((opt, idx) => (
								<Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={idx}>
									<div
										style={{background: determineOptionColor(idx)}}
										onClick={() => selectOption(idx)}
										className={`${classes.opt} ${classes.centered} ${
											selected === idx && !props.isChecked && !props.isReview ? null : classes.lo
										}`}>
										{opt}
									</div>
								</Grid>
							))}
					</Grid>
				</div>

				{(props.isChecked || props.isReview) &&
				props.question.explanation &&
				props.question.explanation.length &&
				props.showAnswerDialogue ? (
					<div className={classes.explanation}>{`Explanation: ${props.question.explanation}`}</div>
				) : null}
			</div>
		</div>
	);
});

MCQCard.propTypes = {
	question: PropTypes.object.isRequired,
	currentQuestionNumber: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
	taskDetail: PropTypes.object.isRequired,
	tried: PropTypes.number.isRequired,
	showAnswerDialogue: PropTypes.bool,
};

export default MCQCard;
