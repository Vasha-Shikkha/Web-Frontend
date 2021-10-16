import React from "react";
import ReactMarkdown from "react-markdown";
import NotesLayout from "../../layouts/notesLayout";
import remarkGfm from "remark-gfm";
import styles from "./styles";

const Tutorial = (props) => {
	const classes = styles();
	const {taskDetail} = props.location.state;

	return (
		<NotesLayout>
			<div className={classes.root}>
				<ReactMarkdown children={taskDetail.instruction} remarkPlugins={[remarkGfm]} />
			</div>
		</NotesLayout>
	);
};

export default Tutorial;
