import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import styles from "./styles";

const HamburgerMenu = () => {
	const classes = styles();
	const history = useHistory();
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
		</div>
	);
};

export default HamburgerMenu;
