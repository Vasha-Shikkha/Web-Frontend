import React, {useState, forwardRef, useImperativeHandle} from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import colors from "../../../styles/colors";
import styles from "./styles";

const PictureToWordCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			let answer = {users_answer: selected};

			if (selected === props.question.answer) answer.isCorrect = true;
			else answer.isCorrect = false;

			return answer;
		},
	}));

	const classes = styles();
	const [selected, setSelected] = useState(props.question.users_answer);

	// if not reviewing or done checking then let the user select an option
	const selectOption = (idx) => {
		if (!props.isReview && !props.isChecked) {
			setSelected(idx);
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
			<div className={`${classes.question} ${classes.centered}`}>
				{props.question.question}
				<img src={props.question.questionImage} alt="" className={classes.questionImage} />
			</div>
			<div className={classes.optionContainer}>
				<Grid
					container
					spacing={3}
					direction="row"
					wrap="wrap"
					justify="space-between"
					alignContent="space-between"
					alignItems="stretch">
					{props.question.options.map((obj, idx) => (
						<div
							key={idx}
							style={{background: determineOptionColor(idx)}}
							onClick={() => selectOption(idx)}
							className={`${classes.opt} ${classes.centered} ${
								selected === idx && !props.isChecked && !props.isReview ? classes.hi : classes.lo
							}`}>
							{obj}
						</div>
					))}
				</Grid>
			</div>
		</div>
	);
});

PictureToWordCard.propTypes = {
	question: PropTypes.object.isRequired,
	moveAway: PropTypes.bool,
	elevation: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default PictureToWordCard;
