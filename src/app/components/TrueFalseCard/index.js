import React, {useState} from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import colors from "../../styles/colors";
import styles from "./styles";

const TrueFalseCard = (props) => {
	const classes = styles();
	const [selected, setSelected] = useState(props.question.users_answer);

	const selectOption = (idx) => {
		// if not review then select
		if (props.isReview === false && !props.isChecked) {
			setSelected(idx);
		}
	};

	const determineOptionColor = (val) => {
		if (!props.isChecked && !props.isReview) return colors.white;
		else if (props.isReview) {
			if (props.question.users_answer === val && props.question.answer === val)
				return colors.correct;
			else if (props.question.users_answer === val && props.question.answer !== val)
				return colors.incorrect;
			else if (props.question.users_answer !== val && props.question.answer === val)
				return colors.correct;
			else return colors.white;
		} else {
			if (val === selected && val === props.question.answer) return colors.correct;
			else if (val !== selected && val === props.question.answer) return colors.correct;
			else if (val === selected && val !== props.question.asnwer) return colors.incorrect;
			else return colors.white;
		}
	};

	const check = () => {
		let answer = {users_answer: selected};
		if (selected === props.question.users_answer) answer.correct = true;
		else answer.correct = false;

		return answer;
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
					<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
						<div
							style={{background: determineOptionColor(1)}}
							onClick={() => selectOption(1)}
							className={`${classes.opt} ${classes.centered} ${
								selected === 1 ? classes.hi : classes.lo
							}`}>
							True
						</div>
					</Grid>

					<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
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
};

TrueFalseCard.propTypes = {
	question: PropTypes.object.isRequired,
	moveAway: PropTypes.bool,
	elevation: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default TrueFalseCard;
