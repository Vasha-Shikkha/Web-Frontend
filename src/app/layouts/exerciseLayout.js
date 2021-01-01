import {makeStyles} from "@material-ui/core";
import React, {useState} from "react";
import PropTypes from "prop-types";

const styles = makeStyles((theme) => ({
	root: {
		height: "100vh",
		width: "100%",
	},

	nav: {
		height: "10vh",
		width: "100%",
		background: "green",
	},

	btnContainer: {
		height: "10vh",
		width: "100%",
		background: "red",
	},

	child: {
		height: "80vh",
		width: "100%",
		background: "blue",
	},
}));

const ExerciseLayout = (props) => {
	const classes = styles();
	return (
		<div className={classes.root}>
			<div className={classes.nav}></div>
			<div className={classes.child}>{props.children}</div>
			<div className={classes.btnContainer}></div>
		</div>
	);
};

ExerciseLayout.propTypes = {
	children: PropTypes.object.isRequired,
};

export default ExerciseLayout;
