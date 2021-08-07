import React from "react";
import BackArrowButton from "../../components/BackArrowButton";

import styles from "./styles";

const Tutorial = (props) => {
	const classes = styles();
	const {taskDetail} = props.location.state;

	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<BackArrowButton />
			</div>
			<div className={classes.tutorialContainer}>
				<div
					dangerouslySetInnerHTML={{
						__html: taskDetail && taskDetail.instruction ? taskDetail.instruction : null,
					}}></div>
				{!taskDetail || !taskDetail.instruction ? (
					<div className={classes.noNotesFoundText}>No notes available for this task</div>
				) : null}
			</div>
		</div>
	);
};

export default Tutorial;
