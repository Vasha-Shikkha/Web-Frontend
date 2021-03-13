import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		checkAuth();
	}, []);

	const checkAuth = () => {
		let user = localStorage.getItem("vasha_shikkha_user");
		let jwtToken = localStorage.getItem("vasha_shikkha_jwtToken");

		// if something is undefined while saving, it's stored as undefined
		// in the local storage. when retrieving it from the storage,
		// it becomes a string and it becomes difficult to realize that this is causing error
		// because you print it and see `undefined` in the console, so you hardly bother about it
		if (user && user === "undefined") user = null;
		if (jwtToken && jwtToken === "undefined") jwtToken = null;

		if (jwtToken) {
			setIsAuthenticated(true);
			setUser(user);

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
