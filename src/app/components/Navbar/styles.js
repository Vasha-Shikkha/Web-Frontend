import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		height: 50,
		width: "100%",
		padding: "0px 5% 0 5%",
		boxShadow: "0 0 4px grey",

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},

	logoContainer: {
		height: "100%",
		background: "cyan",

		display: "flex",
		alignContent: "center",
		alignItems: "center",

		[theme.breakpoints.down("md")]: {
			width: "50%",
		},

		[theme.breakpoints.up("md")]: {
			width: "20%",
		},
	},

	contentContainer: {
		height: "100%",
		background: "yellow",

		[theme.breakpoints.down("md")]: {
			width: "50%",
		},

		[theme.breakpoints.up("md")]: {
			width: "80%",
		},
	},

	mobileNav: {
		width: "100%",
		height: "100%",
		background: "red",
		position: "relative",

		[theme.breakpoints.down("md")]: {
			display: "flex",
		},

		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},

	webNav: {
		width: "100%",
		height: "100%",
		background: "blue",

		[theme.breakpoints.down("md")]: {
			display: "none",
		},

		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
}));

export default styles;
