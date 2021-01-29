import React, {useState, forwardRef, useImperativeHandle} from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import colors from "../../../styles/colors";
import styles from "./styles";

const JumbledSentenceCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {},
	}));

	const classes = styles();

	return (
		<div
			style={{zIndex: props.elevation ? props.elevation : 0}}
			className={
				props.moveAway === false ? classes.root : `${classes.root} ${classes.transition}`
			}></div>
	);
});

JumbledSentenceCard.propTypes = {
	question: PropTypes.object.isRequired,
	moveAway: PropTypes.bool,
	elevation: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default JumbledSentenceCard;
