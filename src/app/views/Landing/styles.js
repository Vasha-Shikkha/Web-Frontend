import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100vh",
	},

	centered: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	landingImg: {
		[theme.breakpoints.down("md")]: {
			width: "100%",
			height: "auto",
		},

		[theme.breakpoints.up("lg")]: {
			width: "auto",
			height: "70vh",
		},
	},

	btn: {
		background: theme.palette.colors.primary,
		color: "white",
		width: "150px",
		height: "50px",

		marginTop: "30px",
		borderRadius: "5px",
		cursor: "pointer",
		textDecoration: "none",
	},
}));

export default styles;
