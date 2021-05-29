import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {isJwtValid} from "../util/helpers";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		checkAuth();
	}, []);

	const checkAuth = () => {
		let user = localStorage.getItem("vasha_shikkha_user");
		let jwtTokenExpiryDate = localStorage.getItem("vasha_shikkha_jwtToken_expiresAt");

		if (jwtTokenExpiryDate && isJwtValid(jwtTokenExpiryDate)) {
			setIsAuthenticated(true);
			setUser(user);
			console.log("in state - logged in");
			return true;
		} else return false;
	};

	const login = (user, cb) => {
		setIsAuthenticated(isAuthenticated);
		setUser(user);
		cb();
	};

	const logout = () => {
		localStorage.removeItem("vasha_shikkha_user");
		localStorage.removeItem("vasha_shikkha_jwtToken");
		localStorage.removeItem("vasha_shikkha_jwtToken_expiresAt");

		setUser({});
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider
			value={{
				user: user,
				isAuthenticated: isAuthenticated,
				checkAuth: checkAuth,
				logout: logout,
				login: login,
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.object.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
