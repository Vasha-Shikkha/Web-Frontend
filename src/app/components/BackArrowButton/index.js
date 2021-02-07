import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {makeStyles} from "@material-ui/core";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

const styles = makeStyles((theme) => ({
	backBtnOuter: {
		background: theme.palette.colors.mediumPink,
		color: "white",
		height: 30,
		width: 30,
		cursor: "pointer",
		borderRadius: "100%",
	},

	centered: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
}));

const BackArrowBtn = (props) => {
	const classes = styles();

	return (
		<Link to={props.link} className={`${classes.backBtnOuter} ${classes.centered}`}>
			<ArrowBackOutlinedIcon className={classes.backBtn} />
		</Link>
	);
};

BackArrowBtn.propTypes = {
	link: PropTypes.string.isRequired,
};

export default BackArrowBtn;
