import React from "react";
import BackArrowButton from "../../components/BackArrowButton";

import styles from "./styles";

const Tutorial = (props) => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<BackArrowButton link={props.location.state.from} />
			</div>
			<div className={classes.tutorialContainer}>tutorial</div>
		</div>
	);
};

export default Tutorial;
