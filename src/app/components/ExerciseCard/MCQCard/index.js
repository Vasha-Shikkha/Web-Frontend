import React, {useState, forwardRef, useImperativeHandle} from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import colors from "../../../styles/colors";
import styles from "./styles";

const MCQCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			let answer = {users_answer: [], isCorrect: true};
			let cnt = 0;

			for (let i = 0; i < selected.length; i++) {
				if (selected[i]) {
					answer.users_answer.push(i);
					cnt++;
				}
			}

			for (let i = 0; i < props.question.answer.length; i++) {
				// correct option not selected
				if (!selected[props.question.answer[i]]) {
					answer.isCorrect = false;
					break;
				}
			}

			// all the correct options are selected, now we check if any extra option has been selected
			// if number of selecteds is greater than actual answer size then extra options have been selected
			if (answer.isCorrect && cnt > props.question.answer.length) answer.isCorrect = false;

			return answer;
		},
	}));

	const classes = styles();
	const [selected, setSelected] = useState(props.question.options.map(() => false));

	const selectOption = (idx) => {
		if (!props.isReview && !props.isChecked) {
			let arr = [...selected];
			arr[idx] = !arr[idx];
			setSelected(arr);
		}
	};

	const determineOptionColor = (idx) => {
		if (!props.isChecked && !props.isReview) return colors.white;
		else {
			let x = new Set(props.question.answer);
			let y = new Set(props.question.users_answer);

			if (x.has(idx) && y.has(idx)) return colors.correct;
			else if (x.has(idx) && !y.has(idx)) return colors.correct;
			else if (!x.has(idx) && y.has(idx)) return colors.incorrect;
			else return colors.white;
		}
	};

	return (
		<div
			style={{zIndex: props.elevation ? props.elevation : 0}}
			className={props.moveAway === false ? classes.root : `${classes.root} ${classes.transition}`}>
			<div className={`${classes.question} ${classes.centered}`}>{props.question.question}</div>
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
						<Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={idx}>
							<div
								style={{background: determineOptionColor(idx)}}
								onClick={() => selectOption(idx)}
								className={`${classes.opt} ${classes.centered} ${
									selected[idx] && !props.isChecked && !props.isReview ? classes.hi : classes.lo
								}`}>
								{obj}
							</div>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
});

MCQCard.propTypes = {
	question: PropTypes.object.isRequired,
	moveAway: PropTypes.bool,
	elevation: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default MCQCard;
