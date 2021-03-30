import React, {Component} from "react";
import Loading from "../components/Loading";
import {Redirect} from "react-router-dom";
import {checkJWT} from "../axios/services/jwtVerifier";
import {AuthConsumer} from "../stateHandlers/authContext";

class PrivateComponent extends Component {
	state = {
		status: null,
	};

	componentDidMount() {
		checkJWT((err, data) => {
			if (err) {
				localStorage.removeItem("vasha_shikkha_user");
				localStorage.removeItem("vasha_shikkha_jwtToken");
				this.setState({status: false});
			} else if (this.props.checkAuth()) this.setState({status: true});
			else {
				localStorage.removeItem("vasha_shikkha_user");
				localStorage.removeItem("vasha_shikkha_jwtToken");
				this.setState({status: false});
			}
		});
	}

	render() {
		const {status} = this.state;

		const {component} = this.props;
		if (status === true) return component;
		else if (status === false) return <Redirect to={"/auth"} />;
		else return <Loading />;
	}
}

const ConsumerComponent = (props) => (
	<AuthConsumer>
		{({checkAuth}) => <PrivateComponent {...props} checkAuth={checkAuth} />}
	</AuthConsumer>
);

export default ConsumerComponent;
