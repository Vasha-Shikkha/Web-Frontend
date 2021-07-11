import React from "react";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: 100,
		height: 40,
		borderRadius: 10,
		cursor: "pointer",

		display: "grid",
		placeContent: "center",

		background: theme.palette.colors.violetMedium,
		color: "white",
	},
}));

const RegisterButton = () => {
	const classes = styles();
	const history = useHistory();

	return (
		<div className={classes.root} onClick={() => history.push("/auth")}>
			Register
		</div>
	);
};

export default RegisterButton;
