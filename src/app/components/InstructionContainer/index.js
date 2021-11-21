import React from "react";
import PropTypes from "prop-types";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import styles from "./styles";

const InstructionContainer = (props) => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<ReactMarkdown
				children={props.instruction}
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw]}
			/>
		</div>
	);
};

InstructionContainer.propTypes = {
	instruction: PropTypes.string,
};

export default InstructionContainer;
