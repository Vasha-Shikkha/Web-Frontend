import React from "react";
import ReactMarkdown from "react-markdown";
import NotesLayout from "../../layouts/notesLayout";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./tutorialStyles.css";

const Tutorial = (props) => {
	const {taskDetail} = props.location.state;

	return (
		<NotesLayout>
			<div className="root">
				<ReactMarkdown
					children={taskDetail.instruction}
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw]}
				/>
			</div>
		</NotesLayout>
	);
};

export default Tutorial;
