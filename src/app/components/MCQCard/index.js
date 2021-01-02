import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const MCQCard = (props) => {
	const classes = styles();

	return (
		<div
			className={props.moveAway === false ? classes.root : `${classes.root} ${classes.transition}`}>
			<div className={classes.question}></div>
			<div className={classes.optionContainer}></div>
		</div>
	);
};

MCQCard.propTypes = {
	question: PropTypes.object.isRequired,
	moveAway: PropTypes.bool.isRequired,
	questionNo: PropTypes.number.isRequired,
};

export default MCQCard;
