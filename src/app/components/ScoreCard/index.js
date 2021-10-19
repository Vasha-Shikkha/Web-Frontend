import React from "react";
import PropTypes from "prop-types";
import correctAnswerGirl from "../../assets/verdictBanner/correctAnswerGirl.png";
import correctAnswerBoy from "../../assets/verdictBanner/correctAnswerBoy.png";
import Button from "../Button";
import styles from "./styles";

const ScoreCard = ({score, total, closeScoreDialog}) => {
	const classes = styles();

	const determineImage = () => {
		let randomNumber = Math.floor(Math.random() * 100);
		return randomNumber % 2 ? correctAnswerGirl : correctAnswerBoy;
	};

	return (
		<div className={classes.root}>
			<div className={classes.header}>Task Completed</div>
			<img className={classes.image} src={determineImage()} alt="" />
			<div className={classes.scoreText}>{`You Got ${score} out of ${total} correct!`}</div>
			<Button
				text="Ok"
				onClick={closeScoreDialog}
				styles={`${classes.okButton} ${score === total ? classes.correct : classes.incorrect}`}
			/>
		</div>
	);
};

ScoreCard.propTypes = {
	score: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	closeScoreDialog: PropTypes.func.isRequired,
};

export default ScoreCard;
