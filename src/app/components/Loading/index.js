import React from "react";
import PropTypes from "prop-types";
import {CircularProgress} from "@material-ui/core";

import styles from "./styles";
import colors from "../../styles/colors";

const Loading = (props) => {
	const classes = styles();
	return (
		<div
			style={props.container ? null : {height: "100vh"}}
			className={`${classes.root} ${props.container ? props.container : ""} ${classes.centered}`}>
			<CircularProgress style={{color: colors.primary}} />
		</div>
	);
};

Loading.propTypes = {
	container: PropTypes.string,
};

export default Loading;
