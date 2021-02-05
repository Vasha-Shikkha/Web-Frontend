import React from "react";
import styles from "./styles";
import PropTypes from "prop-types";

const Timer = (props) => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.outer}>
				<div
					style={{width: `${((props.currentQuestionNumber - 1) * 100) / props.totalQuestions}%`}}
					className={classes.inner}></div>
			</div>
		</div>
	);
};

Timer.propTypes = {
	currentQuestionNumber: PropTypes.number.isRequired,
	totalQuestions: PropTypes.number.isRequired,
};

export default Timer;
