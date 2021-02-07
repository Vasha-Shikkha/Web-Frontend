import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const JumbledSentenceCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			let answer = {isCorrect: true, users_answer: ""};

			for (let i = 0; i < usersAnswer.length; i++) {
				answer.users_answer += props.question.chunks[usersAnswer[i]];
			}

			answer.isCorrect = answer.users_answer === props.question.answer;
			return answer;
		},
	}));

	const classes = styles();
	const [shuffled, setShuffled] = useState([]);
	const [usersAnswer, setUsersAnswer] = useState([]);

	useEffect(() => {
		setShuffled(props.question.chunks.map(() => true));
	}, [props.question.chunks]);

	const useWord = (idx) => {
		if (props.isReview || props.isChecked) return;

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
		if (props.isReview || props.isChecked) return;

		let arr = [...shuffled];
		arr[usersAnswer[idx]] = true;
		setShuffled(arr);

		arr = [...usersAnswer];
		arr.splice(idx, 1);
		setUsersAnswer(arr);
	};

	return (
		<div
			style={{
				display: props.thisQuestionNumber === props.currentQuestionNumber ? "initial" : "none",
			}}
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
			<div className={`${classes.answerContainer}`}>
				<div className={classes.lineContainer}>
					<div className={classes.line}>dummy text that is invisible</div>
					<div className={classes.line}>dummy text that is invisible</div>
					<div className={classes.line}>dummy text that is invisible</div>
				</div>
				<div style={{position: "absolute"}} className={classes.wordContainer}>
					{usersAnswer.map((obj, idx) => (
						<div onClick={() => unuseWord(idx)} className={classes.shuffledWordActive} key={idx}>
							{props.question.chunks[obj]}
						</div>
					))}
				</div>
			</div>
		</div>
	);
});

JumbledSentenceCard.propTypes = {
	question: PropTypes.object.isRequired,
	moveAway: PropTypes.bool,
	thisQuestionNumber: PropTypes.number,
	currentQuestionNumber: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default JumbledSentenceCard;
