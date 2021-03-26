import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import colors from "../../../styles/colors";
import styles from "./styles";

const MCQCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			let answer = {
				users_answer: selected,
				isCorrect: props.question.options[selected] === props.question.answer,
			};

			return answer;
		},
	}));

	const classes = styles();
	const [selected, setSelected] = useState(-1);

	useEffect(() => {
		setSelected(-1);
		console.log(props.question);
	}, [props.currentQuestionNumber]);

	const selectOption = (idx) => {
		if (!props.isReview && !props.isChecked) {
			setSelected(idx);
		}
	};

	const determineOptionColor = (idx) => {
		if (!props.isChecked && !props.isReview) return colors.white;
		else {
			if (selected !== idx) return colors.white;
			else {
				if (props.question.options[selected] === props.question.answer) return colors.correct;
				return colors.incorrect;
			}
		}
	};

	return (
		<div className={classes.root}>
			<div
				contentEditable="false"
				dangerouslySetInnerHTML={{
					__html: props.question.taskDetail ? props.question.taskDetail.instruction : null,
				}}
				className={classes.instruction}></div>
			{props.question.questions &&
				props.question.questions.map((obj, idx) => (
					<div className={classes.questionContainer}>
						<div
							className={`${classes.question}`}
							contentEditable="false"
							dangerouslySetInnerHTML={{__html: props.question.question}}></div>

						<div className={classes.optionContainer}>
							<Grid container spacing={3}>
								{props.question.options &&
									props.question.options.map((obj, idx) => (
										<Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={idx}>
											<div
												style={{background: determineOptionColor(idx)}}
												onClick={() => selectOption(idx)}
												className={`${classes.opt} ${classes.centered} ${
													selected === idx && !props.isChecked && !props.isReview
														? classes.hi
														: classes.lo
												}`}>
												{obj}
											</div>
										</Grid>
									))}
							</Grid>
						</div>
					</div>
				))}
		</div>
	);
});

MCQCard.propTypes = {
	question: PropTypes.object.isRequired,
	currentQuestionNumber: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default MCQCard;
