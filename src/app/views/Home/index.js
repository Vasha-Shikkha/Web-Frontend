import React from "react";
import {Link} from "react-router-dom";
import styles from "./styles";

const Landing = () => {
	const classes = styles();
	return (
		<div className={`${classes.root} ${classes.centered}`}>
			<Link to="/mcq">solve mcq</Link>
			<Link to="/true-false">solve true-false</Link>
		</div>
	);
};

export default Landing;
