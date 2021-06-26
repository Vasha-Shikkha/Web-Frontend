import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {AuthConsumer} from "../../stateHandlers/authContext";

import styles from "./styles";

const HamburgerMenu = (props) => {
	const classes = styles();
	const history = useHistory();
	const [checked, setChecked] = useState(false);

	const handleCheckBox = () => {
		setChecked(!checked);
	};

	const handleLogout = () => {
		props.logout(() => {
			history.push("/auth");
		});
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
				<div className={classes.link} onClick={() => history.push("/about")}>
					About
				</div>
				<div onClick={handleLogout} className={classes.link}>
					Logout
				</div>
			</div>
		</div>
	);
};

const ConsumerComponent = (props) => (
	<AuthConsumer>{({logout}) => <HamburgerMenu {...props} logout={logout} />}</AuthConsumer>
);

export default ConsumerComponent;
