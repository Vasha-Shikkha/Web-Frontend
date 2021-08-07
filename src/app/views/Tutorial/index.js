import React, {useEffect} from "react";
import BackArrowButton from "../../components/BackArrowButton";

import styles from "./styles";

const Tutorial = (props) => {
	const classes = styles();
	const {taskDetail} = props.location.state;

	useEffect(() => {
		// call api to fetch tutorial here
		console.log(taskDetail);
	}, []);

	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<BackArrowButton />
			</div>
			<div className={classes.tutorialContainer}></div>
		</div>
	);
};

export default Tutorial;
