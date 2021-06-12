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
				<div className={classes.hamItem}>
					<Link to="/" className={classes.LINK}>
						<div className={classes.p1}>01.</div>
						<div className={classes.p2H}>About</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HamburgerMenu;
