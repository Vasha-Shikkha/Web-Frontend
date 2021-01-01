import React from "react";

import styles from "./styles";

const Landing = () => {
	const classes = styles();
	return <div className={`${classes.root} ${classes.centered}`}>home of learning</div>;
};

export default Landing;
