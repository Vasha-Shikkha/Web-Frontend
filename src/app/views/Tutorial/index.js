import React from "react";
import ReactMarkdown from "react-markdown";
import NotesLayout from "../../layouts/notesLayout";
import remarkGfm from "remark-gfm";
import "./tutorialStyles.css";

const Image = (props) => {
	return <img {...props} style={{width: "100px"}} />;
};

const Tutorial = (props) => {
	const {taskDetail} = props.location.state;

	return (
		<NotesLayout>
			<div className="root">
				<ReactMarkdown
					skipHtml={true}
					children={taskDetail.instruction}
					remarkPlugins={[remarkGfm]}
					renderers={{image: Image}}
				/>
			</div>
		</NotesLayout>
	);
};

export default Tutorial;
