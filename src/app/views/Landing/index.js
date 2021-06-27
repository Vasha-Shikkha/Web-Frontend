import React, {useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import {AuthConsumer} from "../../stateHandlers/authContext";
import Navbar from "../../components/Navbar";
import styles from "./styles";

const Landing = (props) => {
	const classes = styles();
	const history = useHistory();

	useEffect(() => {
		if (props.isAuthenticated) history.push("/home");
	}, []);
	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<Navbar />
			</div>
			<div className={classes.contentContainer}></div>
		</div>
	);
};

const ConsumerComponent = (props) => (
	<AuthConsumer>
		{({isAuthenticated}) => <Landing {...props} isAuthenticated={isAuthenticated} />}
	</AuthConsumer>
);

export default ConsumerComponent;
