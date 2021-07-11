import React, {useState} from "react";
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
	const [tempArr, setter] = useState(null);

	return (
		<div className={classes.root}>
			this will crash
			{tempArr.map(() => (
				<p>err</p>
			))}
		</div>
	);
};

export default SentryTester;
