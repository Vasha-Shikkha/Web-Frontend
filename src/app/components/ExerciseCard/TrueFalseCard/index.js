import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import colors from "../../../styles/colors";
import styles from "./styles";

const TrueFalseCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			let answer = {users_answer: selected};

			if (selected === props.question.answer) answer.isCorrect = true;
			else answer.isCorrect = false;

			return answer;
		},
	}));

	const classes = styles();
	const [selected, setSelected] = useState(-1);

	useEffect(() => {
		setSelected(-1);
	}, [props.question]);

	// if not reviewing or done checking then let the user select an option
	const selectOption = (val) => {
		if (!props.isReview && !props.isChecked) {
			setSelected(val);
		}
	};

	// determine the color of the option boxes
	const determineOptionColor = (val) => {
		if (!props.isChecked && !props.isReview) return colors.white;
		else {
			// when checked, users_answer is updated so we use that data
			if (props.question.users_answer === val && props.question.answer === val)
				return colors.correct;
			else if (props.question.users_answer === val && props.question.answer !== val)
				return colors.incorrect;
			else if (props.question.users_answer !== val && props.question.answer === val)
				return colors.correct;
			else return colors.white;
		}
	};

	return (
		<div
			style={{zIndex: props.elevation ? props.elevation : 0}}
			className={props.moveAway === false ? classes.root : `${classes.root} ${classes.transition}`}>
			<div className={`${classes.question} ${classes.centered}`}>{props.question.question}</div>
			<div className={classes.optionContainer}>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
						<div
							style={{background: determineOptionColor(1)}}
							onClick={() => selectOption(1)}
							className={`${classes.opt} ${classes.centered} ${
								selected === 1 ? classes.hi : classes.lo
							}`}>
							True
						</div>
					</Grid>

					<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
						<div
							style={{background: determineOptionColor(0)}}
							onClick={() => selectOption(0)}
							className={`${classes.opt} ${classes.centered} ${
								selected === 0 ? classes.hi : classes.lo
							}`}>
							False
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
});

TrueFalseCard.propTypes = {
	question: PropTypes.object.isRequired,
	elevation: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default TrueFalseCard;
