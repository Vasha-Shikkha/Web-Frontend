import React from "react";
import NotesLayout from "../../layouts/notesLayout";
import styles from "./styles";

const Tutorial = (props) => {
	const classes = styles();
	const {taskDetail} = props.location.state;

	return (
		<NotesLayout>
			<div className={classes.root}>
				<div
					dangerouslySetInnerHTML={{
						__html: taskDetail && taskDetail.instruction ? taskDetail.instruction : null,
					}}></div>
				{!taskDetail || !taskDetail.instruction ? (
					<div className={classes.noNotesFoundText}>No notes available for this task</div>
				) : null}
			</div>
		</NotesLayout>
	);
};

export default Tutorial;
