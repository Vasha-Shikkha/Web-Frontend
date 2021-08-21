import React from "react";
import {useHistory} from "react-router-dom";
import {AuthConsumer} from "../../stateHandlers/authContext";
import RegisterButton from "../RegisterButton";
import HamburgerMenu from "../HamburgerMenu";

import styles from "./styles";

const Navbar = (props) => {
	const classes = styles();
	const history = useHistory();

	const handleLogout = () => {
		props.logout(() => {
			history.push("/auth");
		});
	};

	return (
		<div className={classes.root}>
			<div
				className={classes.logoContainer}
				onClick={() => {
					history.push("/home");
				}}>
				vasha<span style={{fontWeight: "bold"}}>Shikkha</span>
			</div>
			<div
				className={
					props.isAuthenticated
						? classes.contentContainerAuthenticated
						: classes.contentContainerUnAuthenticated
				}>
				<div
					className={classes.webNav}
					style={{justifyContent: props.isAuthenticated ? "flex-end" : "center"}}>
					<div
						className={classes.link}
						onClick={() => (props.isAuthenticated ? history.push("/home") : history.push("/"))}>
						Home
					</div>

					<div className={classes.link} onClick={() => history.push("/dictionary")}>
						Dictionary
					</div>

					{props.isAuthenticated && (
						<div className={classes.link} onClick={() => history.push("/flash-card")}>
							Flashcard
						</div>
					)}

					<div className={classes.link} onClick={() => history.push("/about")}>
						About
					</div>

					{props.isAuthenticated && (
						<div onClick={handleLogout} className={classes.link}>
							Logout
						</div>
					)}
				</div>

				<div className={classes.mobileNav}>
					<HamburgerMenu />
				</div>
			</div>

			{!props.isAuthenticated && (
				<div className={classes.authContainer}>
					<div className={classes.link} onClick={() => history.push("/auth")}>
						Login
					</div>
					<RegisterButton />
				</div>
			)}
		</div>
	);
};

const ConsumerComponent = (props) => (
	<AuthConsumer>
		{({logout, isAuthenticated}) => (
			<Navbar {...props} logout={logout} isAuthenticated={isAuthenticated} />
		)}
	</AuthConsumer>
);

export default ConsumerComponent;
