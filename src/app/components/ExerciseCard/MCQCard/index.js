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
	const [selected, setSelected] = useState([]);

	useEffect(() => {
		setSelected(props.question.questions ? props.question.questions.map(() => -1) : []);
		console.log(props.question);
	}, [props.currentQuestionNumber, props.question]);

	const selectOption = (idx, jdx) => {
		if (!props.isReview && !props.isChecked) {
			let temp = [...selected];
			temp[idx] = jdx;
			setSelected(temp);
		}
	};

	const determineOptionColor = (idx, jdx) => {
		if (!props.isChecked && !props.isReview) {
			if (selected[idx] === jdx) return colors.secondary;
			return colors.white;
		} else {
			if (selected[idx] !== jdx) return colors.white;
			else {
				if (
					props.question.questions[idx].options[selected[idx]] ===
					props.question.questions[idx].answer
				)
					return colors.correct;
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
					<div key={idx} className={classes.questionContainer}>
						<div
							className={`${classes.question}`}
							contentEditable="false"
							dangerouslySetInnerHTML={{__html: obj.question}}></div>

						<div className={classes.optionContainer}>
							<Grid container spacing={3}>
								{props.question.questions[idx].options &&
									props.question.questions[idx].options.map((opt, jdx) => (
										<Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={jdx}>
											<div
												style={{background: determineOptionColor(idx, jdx)}}
												onClick={() => selectOption(idx, jdx)}
												className={`${classes.opt} ${classes.centered} ${
													selected[idx] === jdx && !props.isChecked && !props.isReview
														? null
														: classes.lo
												}`}>
												{opt}
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
