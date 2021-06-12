import React, {useState} from "react";
import {Link} from "react-router-dom";

import styles from "./styles";

const HamburgerMenu = () => {
	const classes = styles();
	const [checked, setChecked] = useState(false);

	const handleCheckBox = () => {
		setChecked(!checked);
	};

	return (
		<div className={classes.menu_wrap}>
			<input
				onChange={() => handleCheckBox()}
				type="checkbox"
				className={classes.menu_wrap_toggler}
			/>
			<div className={classes.menu_wrap_hamburger}>
				<div
					className={
						checked ? classes.menu_wrap_hamburger_div_ifChecked : classes.menu_wrap_hamburger_div
					}></div>
			</div>

			<div className={classes.menu} style={{right: checked ? "0" : "-75vw"}}>
				<Link to="/" className={classes.link}>
					Home
				</Link>
				<Link to="/dictionary" className={classes.link}>
					Dictionary
				</Link>
				<Link to="/flash-card" className={classes.link}>
					Flashcard
				</Link>
				<Link to="/" className={classes.link}>
					Acknowledgement
				</Link>
				<div className={classes.link}>Logout</div>
			</div>
		</div>
	);
};

export default HamburgerMenu;
