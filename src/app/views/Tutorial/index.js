import React from "react";
import {Link} from "react-router-dom";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

import styles from "./styles";

const Tutorial = (props) => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<Link
				to={props.location.state.from}
				className={`${classes.backBtnOuter} ${classes.centered}`}>
				<ArrowBackOutlinedIcon className={classes.backBtn} />
			</Link>

			<div className={classes.tutorialContainer}>tutorial</div>
		</div>
	);
};

export default Tutorial;
