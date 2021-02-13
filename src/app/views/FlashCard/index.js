import React from "react";
import Button from "../../components/Button";
import styles from "./styles";

const FlashCard = (props) => {
	const classes = styles();

	const next = () => {};

	return (
		<div className={classes.root}>
			<div className={classes.navContainer}></div>
			<div className={classes.contentContainer}></div>
			<div className={`${classes.btnContainer} ${classes.centered}`}>
				<Button text="Next" onClick={() => next()} styles={classes.btn} />
			</div>
		</div>
	);
};

export default FlashCard;
