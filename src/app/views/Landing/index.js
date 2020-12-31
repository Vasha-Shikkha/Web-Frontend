import React from "react";
import {Link} from "react-router-dom";

import LandingImg from "../../assets/landing_img.svg";
import styles from "./styles";

const Landing = () => {
	const classes = styles();
	return (
		<div className={`${classes.root} ${classes.centered}`}>
			<img src={LandingImg} alt="" className={classes.landingImg} />
			<Link to="/signin" className={`${classes.btn} ${classes.centered}`}>
				Sign In
			</Link>
		</div>
	);
};

export default Landing;
