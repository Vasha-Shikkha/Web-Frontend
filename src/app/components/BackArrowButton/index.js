import React from "react";
import {useHistory} from "react-router-dom";
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

const BackArrowBtn = () => {
	const classes = styles();
	const history = useHistory();

	return (
		<div className={`${classes.backBtnOuter} ${classes.centered}`}>
			<ArrowBackOutlinedIcon onClick={() => history.goBack()} className={classes.backBtn} />
		</div>
	);
};

export default BackArrowBtn;
