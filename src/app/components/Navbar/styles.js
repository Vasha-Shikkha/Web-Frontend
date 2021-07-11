import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		height: "100%",
		width: "100%",
		padding: "0px 5% 0 5%",
		boxShadow: `0 0 2px ${theme.palette.colors.primary}`,

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		background: "white",
	},

	logoContainer: {
		height: "100%",

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

	contentContainerAuthenticated: {
		height: "100%",

		[theme.breakpoints.down("md")]: {
			width: "50%",
		},

		[theme.breakpoints.up("md")]: {
			width: "80%",
		},
	},

	contentContainerUnAuthenticated: {
		height: "100%",

		[theme.breakpoints.down("md")]: {
			width: "50%",
		},

		[theme.breakpoints.up("md")]: {
			width: "50%",
		},
	},

	authContainer: {
		width: "30%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignContent: "center",
		alignItems: "center",

		[theme.breakpoints.down("md")]: {
			display: "none",
		},

		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},

	mobileNav: {
		width: "100%",
		height: "100%",
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

		display: "flex",
		alignContent: "center",
		alignItems: "center",

		[theme.breakpoints.down("md")]: {
			display: "none",
		},

		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},

	link: {
		color: theme.palette.colors.primary,
		textDecoration: "none",
		cursor: "pointer",
		marginRight: 25,

		"&:nth-last-child(1)": {
			marginRight: 0,
		},
	},
}));

export default styles;
