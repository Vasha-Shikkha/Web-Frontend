import React, {useEffect} from "react";
import BackArrowButton from "../../components/BackArrowButton";

import styles from "./styles";

const Tutorial = (props) => {
	const classes = styles();

	useEffect(() => {
		// call api to fetch tutorial here
		console.log(props.location.state.topicId);
	}, [props.location.state.topicId]);

	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<BackArrowButton />
			</div>
			<div className={classes.tutorialContainer}>tutorial</div>
		</div>
	);
};

export default Tutorial;
