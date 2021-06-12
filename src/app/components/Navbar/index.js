import React from "react";
import {Link} from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu";
import BackArrowButton from "../../components/BackArrowButton";

import styles from "./styles";

const Navbar = (props) => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.logoContainer}>
				vasha<span style={{fontWeight: "bold"}}>Shikkha</span>
			</div>
			<div className={classes.contentContainer}>
				<div className={classes.webNav}>
					<Link to="/"></Link>
					<div>Logout</div>
				</div>
				<div className={classes.mobileNav}>
					<HamburgerMenu />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
