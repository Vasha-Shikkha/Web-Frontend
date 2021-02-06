import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import {shuffle} from "../../../util/helpers";
import PropTypes from "prop-types";
import styles from "./styles";

const JumbledSentenceCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {},
	}));

	const classes = styles();
	const [chunks, setChunks] = useState([]);

	useEffect(() => {
		let chunks = shuffle(props.question.chunks);
		setChunks(chunks);
	}, [props.question.chunks]);

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
