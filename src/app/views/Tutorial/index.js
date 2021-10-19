import React from "react";
import ReactMarkdown from "react-markdown";
import NotesLayout from "../../layouts/notesLayout";
import remarkGfm from "remark-gfm";
import "./tutorialStyles.css";

const Tutorial = (props) => {
	const {taskDetail} = props.location.state;

	return (
		<NotesLayout>
			<div className="root">
				<ReactMarkdown
					skipHtml={true}
					children={taskDetail.instruction}
					remarkPlugins={[remarkGfm]}
				/>
			</div>
		</NotesLayout>
	);
};

export default Tutorial;
