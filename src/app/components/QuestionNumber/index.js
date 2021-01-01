import React from "react";
import styles from "./styles";
import PropTypes from "prop-types";

const Timer = (props) => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.num}>{props.currentQuestionNumber}</div>
			<div className={classes.slash}>/</div>
			<div className={classes.num}>{props.totalQuestions}</div>
		</div>
	);
};

Timer.propTypes = {
	currentQuestionNumber: PropTypes.number.isRequired,
	totalQuestions: PropTypes.number.isRequired,
};

export default Timer;
