import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core";

const styles = makeStyles(() => ({
	root: {
		height: "100%",
		width: "100%",
		borderRadius: 30,

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",

		cursor: "pointer",
	},
}));

const Button = (props) => {
	const classes = styles();

	return (
		<div className={`${classes.root} ${props.styles}`} onClick={() => props.onClick()}>
			{props.text}
		</div>
	);
};

Button.propTypes = {
	styles: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
};

export default Button;
