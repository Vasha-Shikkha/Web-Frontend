import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},

	centered: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	imageContainer: {
		width: "100%",
		position: "relative",

		[theme.breakpoints.down("md")]: {
			height: "30vh",
		},
		[theme.breakpoints.up("md")]: {
			height: "40vh",
		},
	},

	imageUpper: {
		width: "100%",
		height: "100%",
		position: "absolute",
	},

	img: {
		height: "100%",
		width: "auto",
	},

	backBtnOuter: {
		background: theme.palette.colors.mediumPink,
		height: 30,
		width: 30,
		cursor: "pointer",
		borderRadius: "100%",
	},

	backBtn: {
		color: "white",
	},

	taskContainer: {
		padding: "5%",
	},

	heading: {
		fontSize: 25,
		fontWeight: 549,
	},

	levelContainer: {
		height: 50,
		width: "100%",

		borderRadius: 10,
		background: theme.palette.colors.lightPink,

		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
		justifyContent: "space-around",

		marginTop: 25,
	},

	levelBox: {
		padding: 10,
		borderRadius: 10,
		width: "24%",
		textAlign: "center",
		cursor: "pointer",
	},

	levelBoxActive: {
		color: "white",
		background: theme.palette.colors.primary,
	},

	levelBoxInactive: {
		color: theme.palette.colors.primary,
	},
}));

export default styles;
