import React from "react";
import Button from "../../components/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import styles from "./styles";

const FlashCard = (props) => {
	const classes = styles();

	const next = () => {};

	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<div className={`${classes.nav_inner} ${classes.crossContainer}`}>
					<CancelIcon className={classes.cross} />
				</div>
				<div className={`${classes.nav_inner} ${classes.centered}`}>FLASH CARDS</div>
			</div>
			<div className={classes.contentContainer}></div>
			<div className={`${classes.btnContainer} ${classes.centered}`}>
				<Button text="Next" onClick={() => next()} styles={classes.btn} />
			</div>
		</div>
	);
};

export default FlashCard;
