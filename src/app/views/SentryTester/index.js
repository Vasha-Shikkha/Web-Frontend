import React from "react";
import {makeStyles} from "@material-ui/core";

const styles = makeStyles(() => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
}));

const SentryTester = () => {
	const classes = styles();

	const handleClick = () => {
		let arr = null;
		arr.map((x) => x);
	};

	return (
		<div className={classes.root}>
			<button onClick={handleClick}>crash the app</button>
		</div>
	);
};

export default SentryTester;
