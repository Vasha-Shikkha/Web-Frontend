import React from "react";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import styles from "./styles";

const Dictionary = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<Navbar />
			</div>

			<div className={classes.contentContainer}></div>
		</div>
	);
};

export default Dictionary;
