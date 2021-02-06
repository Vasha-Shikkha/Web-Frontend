import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const JumbledSentenceCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {},
	}));

	const classes = styles();
	const [shuffled, setShuffled] = useState([]);
	const [usersAnswer, setUsersAnswer] = useState([]);

	useEffect(() => {
		setShuffled(props.question.chunks.map(() => true));
	}, []);

	const useWord = (idx) => {
		// if activated
		if (shuffled[idx]) {
			let arr = [...shuffled];
			arr[idx] = false;
			setShuffled(arr);

			arr = [...usersAnswer];
			arr.push(idx);
			setUsersAnswer(arr);
		}
	};

	const unuseWord = (idx) => {
		let arr = [...shuffled];
		arr[usersAnswer[idx]] = true;
		setShuffled(arr);

		arr = [...usersAnswer];
		arr.splice(idx, 1);
		setUsersAnswer(arr);
	};

	return (
		<div
			style={{zIndex: props.elevation ? props.elevation : 0}}
			className={props.moveAway === false ? classes.root : `${classes.root} ${classes.transition}`}>
			<div className={classes.context}>{props.question.context}</div>
			<div className={classes.wordContainer}>
				{props.question.chunks.map((obj, idx) => (
					<div
						key={idx}
						onClick={() => useWord(idx)}
						className={shuffled[idx] ? classes.shuffledWordActive : classes.shuffledWordInactive}>
						{obj}
					</div>
				))}
			</div>
			<div className={`${classes.wordContainer} ${classes.answerContainer}`}>
				{usersAnswer.map((obj, idx) => (
					<div onClick={() => unuseWord(idx)} className={classes.shuffledWordActive} key={idx}>
						{props.question.chunks[obj]}
					</div>
				))}
			</div>
		</div>
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
