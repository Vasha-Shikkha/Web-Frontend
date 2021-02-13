import React from "react";
import Button from "../../components/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import styles from "./styles";

const FlashCard = (props) => {
	const classes = styles();
	const cards = [
		{
			word: "synonym",
			meaning: "A word having the same or almost the same meaning as another word",
			example: "Huge is a synonym for the word large",
		},
		{
			word: "synonym",
			meaning: "A word having the same or almost the same meaning as another word",
			example: "Huge is a synonym for the word large",
		},
		{
			word: "synonym",
			meaning: "A word having the same or almost the same meaning as another word",
			example: "Huge is a synonym for the word large",
		},
		{
			word: "synonym",
			meaning: "A word having the same or almost the same meaning as another word",
			example: "Huge is a synonym for the word large",
		},
	];

	const next = () => {};

	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<div className={`${classes.nav_inner} ${classes.crossContainer}`}>
					<CancelIcon className={classes.cross} />
				</div>
				<div className={`${classes.nav_inner} ${classes.centered}`}>FLASH CARDS</div>
			</div>
			<div className={`${classes.contentContainer} ${classes.centered}`}>
				{cards.map((obj, idx) => (
					<div
						className={classes.card}
						style={{
							zIndex: cards.length - idx,
							transform: idx === 1 ? "rotate(-7deg)" : idx === 2 ? "rotate(-14deg)" : "rotate(0)",
						}}></div>
				))}
			</div>
			<div className={`${classes.btnContainer} ${classes.centered}`}>
				<Button text="Next" onClick={() => next()} styles={classes.btn} />
			</div>
		</div>
	);
};

export default FlashCard;
