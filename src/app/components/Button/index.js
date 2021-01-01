import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core";

const styles = makeStyles(() => ({
	root: {
		height: 50,
		width: "100%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
}));

const Button = (props) => {
	const classes = styles();

	return (
		<div
			className={classes.root}
			style={{background: props.background, color: props.color}}
			onClick={() => props.onclick()}>
			{props.text}
		</div>
	);
};

Button.propTypes = {
	color: PropTypes.string.isRequired,
	background: PropTypes.string.isRequired,
	onclick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
};

export default Button;
