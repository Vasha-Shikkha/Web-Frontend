import React from "react";
import {CircularProgress} from "@material-ui/core";

import styles from "./styles";

const Loading = () => {
	const classes = styles();
	return (
		<div className={`${classes.root} ${classes.centered}`}>
			<CircularProgress />
		</div>
	);
};

export default Loading;
