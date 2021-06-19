import React from "react";
import {useHistory} from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu";

import styles from "./styles";

const Navbar = () => {
	const classes = styles();
	const history = useHistory();

	return (
		<div className={classes.root}>
			<div className={classes.logoContainer}>
				vasha<span style={{fontWeight: "bold"}}>Shikkha</span>
			</div>
			<div className={classes.contentContainer}>
				<div className={classes.webNav}>
					<div className={classes.link} onClick={() => history.push("/home")}>
						Home
					</div>
					<div className={classes.link} onClick={() => history.push("/dictionary")}>
						Dictionary
					</div>
					<div className={classes.link} onClick={() => history.push("/flash-card")}>
						Flashcard
					</div>
					<div className={classes.link} onClick={() => history.push("/acknowledgement")}>
						Acknowledgement
					</div>
					<div className={classes.link}>Logout</div>
				</div>
				<div className={classes.mobileNav}>
					<HamburgerMenu />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
