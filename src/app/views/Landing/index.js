import React, {useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import {AuthConsumer} from "../../stateHandlers/authContext";
import styles from "./styles";

const Landing = (props) => {
	const classes = styles();
	const history = useHistory();

	useEffect(() => {
		if (props.isAuthenticated) history.push("/home");
	}, []);
	return <div className={classes.root}>landing</div>;
};

const ConsumerComponent = (props) => (
	<AuthConsumer>
		{({isAuthenticated}) => <Landing {...props} isAuthenticated={isAuthenticated} />}
	</AuthConsumer>
);

export default ConsumerComponent;
