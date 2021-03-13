import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		paddingBottom: 100,
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

	arrowContainer: {
		height: "15vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		paddingLeft: "5%",
		position: "absolute",
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
		marginBottom: 25,
	},

	levelBox: {
		padding: 10,
		borderRadius: 10,
		width: "16.67%",
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

	taskBoxOuter: {
		width: "100%",
		height: "auto",

		marginBottom: 10,
		cursor: "pointer",
		position: "relative",
	},

	taskBoxInner: {
		width: "100%",
		height: "auto",

		borderRadius: 10,
		padding: "5%",
		background: theme.palette.colors.background,
	},

	taskImgContainer: {
		[theme.breakpoints.down("300")]: {
			width: 50,
			height: 50,
		},
		[theme.breakpoints.up("300")]: {
			width: 80,
			height: 80,
		},
	},

	topicImage: {
		width: "100%",
		height: "100%",

		objectFit: "cover",
		OObjectPosition: "center",
	},

	title: {
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: 600,
		textAlign: "center",

		marginTop: 15,
	},

	tooltip: {
		position: "absolute",
		marginBottom: 5,
		zIndex: 2,
		width: "100%",

		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	tooltipRectangle: {
		background: theme.palette.colors.primary,
		borderRadius: 10,
		width: "100%",
		height: 70,

		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	btn: {
		width: "80%",
		height: 25,

		borderRadius: 5,
		fontSize: 12,
	},

	tutorialBtn: {
		color: "white",
		background: theme.palette.colors.violetMedium,
		marginBottom: 5,
	},

	exerciseBtn: {
		color: theme.palette.colors.primary,
		background: "white",
	},

	gridroot: {
		flexGrow: 1,
	},
}));

export default styles;
