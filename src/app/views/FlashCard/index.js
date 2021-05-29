import React, {useEffect} from "react";
import Button from "../../components/Button";
import {getFlashCards} from "../../axios/services/flashCard";
import CancelIcon from "@material-ui/icons/Cancel";
import styles from "./styles";

const FlashCard = (props) => {
	const classes = styles();

	useEffect(() => {
		console.log("mounted");
		let date = new Date();
		date.setMonth(date.getMonth() - 1);

		getFlashCards({date}, (err, axios_data) => {
			console.log("ax", err, axios_data);
		});
	}, []);

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
						key={idx}
						className={`${classes.card} ${
							idx === 1 ? classes.rotate5 : idx === 2 ? classes.rotate10 : ""
						}`}
						style={{
							zIndex: cards.length - idx,
						}}>
						<div className={classes.centered}>
							<div className={classes.word}>{obj.word.toUpperCase()}</div>
						</div>
						<div className={classes.meaning}>{obj.meaning}</div>
						<div className={classes.exampleHead}>Example</div>
						<div className={classes.example}>{obj.example}</div>
					</div>
				))}
			</div>
			<div className={`${classes.btnContainer} ${classes.centered}`}>
				<Button text="Next" onClick={() => next()} styles={classes.btn} />
			</div>
		</div>
	);
};

export default FlashCard;
