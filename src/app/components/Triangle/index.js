import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core";

const styles = makeStyles(() => ({
	triangleRoot: {
		width: 0,
		height: 0,
	},
}));

const Triangle = (props) => {
	const classes = styles();

	const determine_style = () => {
		let style = {};

		if (props.direction === "up") {
			style.borderBottom = `${props.size}px solid ${props.color}`;
			style.borderLeft = `${props.size}px solid transparent`;
			style.borderRight = `${props.size}px solid transparent`;
		} else if (props.direction === "down") {
			style.borderTop = `${props.size}px solid ${props.color}`;
			style.borderLeft = `${props.size}px solid transparent`;
			style.borderRight = `${props.size}px solid transparent`;
		} else if (props.direction === "left") {
			style.borderRight = `${props.size}px solid ${props.color}`;
			style.borderTop = `${props.size}px solid transparent`;
			style.borderBottom = `${props.size}px solid transparent`;
		} else {
			style.borderLeft = `${props.size}px solid ${props.color}`;
			style.borderTop = `${props.size}px solid transparent`;
			style.borderBottom = `${props.size}px solid transparent`;
		}

		console.log("style", style);
		return style;
	};

	return <div className={classes.triangleRoot} style={determine_style()}></div>;
};

Triangle.propTypes = {
	direction: PropTypes.number.isRequired,
	size: PropTypes.number.isRequired,
	color: PropTypes.number.isRequired,
};

export default Triangle;
