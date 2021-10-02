import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	outerContainer: {
		position: "relative",
	},

	root: {
		width: "100%",
		height: "100vh",
		position: "absolute",
		padding: 25,
	},

	nav: {
		background: "white",
		[theme.breakpoints.down("md")]: {
			height: 100,
		},

		[theme.breakpoints.up("md")]: {
			height: 75,
		},
	},

	barContainer: {
		width: "100%",
		height: 25,
	},

	container: {
		width: "100%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",
	},

	btnContainer: {
		height: 50,
		flexWrap: "wrap",
	},

	child: {
		height: "calc(100% - 150px)",
		width: "100%",
		background: "cyan",
		[theme.breakpoints.down("md")]: {
			height: "calc(100% - 150px)",
		},

		[theme.breakpoints.up("md")]: {
			height: "calc(100% - 125px)",
		},
	},

	childScrollable: {
		width: "100%",
		background: "white",
	},

	btn: {
		width: "45%",
		height: 40,
	},

	m10: {
		[theme.breakpoints.down("sm")]: {
			marginBottom: 10,
		},

		[theme.breakpoints.up("md")]: {
			marginBottom: 0,
		},
	},

	btn1: {
		color: theme.palette.colors.primary,
		background: "white",
		border: `1px solid ${theme.palette.colors.primary}`,
		boxSizing: "border-box",
		boxShadow: `0px 4px 4px ${theme.palette.colors.primary}`,
		borderRadius: 10,
	},

	btn2: {
		color: "white",
		background: theme.palette.colors.primary,
		boxSizing: "border-box",
		boxShadow: `0px 4px 4px rgba(128, 0, 255, 0.5)`,
		borderRadius: 10,
	},

	btn3: {
		color: "white",
		background: theme.palette.colors.primary,
		boxSizing: "border-box",
		borderRadius: 10,
	},

	nameContainerMobile: {
		width: "100%",
		height: 25,

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",

		fontSize: 16,
		fontWeight: 600,

		[theme.breakpoints.down("md")]: {
			display: "flex",
		},

		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},

	nameContainerDesktop: {
		fontSize: 16,
		fontWeight: 600,
		marginLeft: "14%",

		[theme.breakpoints.down("md")]: {
			display: "none",
		},

		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},

	iconContainer: {
		width: "100%",
		height: 50,

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},

	menuBtn: {
		color: theme.palette.colors.primary,
		fontSize: 30,
		cursor: "pointer",
	},

	cancelIconContainer: {
		height: "100%",
		width: "100%",
		paddingRight: "5%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignContent: "center",
		alignItems: "center",

		background: "#ECE0FF",
	},

	sidebar: {
		position: "fixed",
		height: "80vh",
		width: "90%",
		left: "5%",

		zIndex: 10,
		background: "#ECE0FF",

		overflowY: "auto",

		transformOrigin: "right",
		transitionDuration: "1.0s",
		boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)",
	},

	searchOuter: {
		width: 200,
		height: 40,
		borderRadius: 20,
		padding: 5,

		border: `2px solid ${theme.palette.colors.violetMedium}`,

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignContent: "center",
		alignItems: "center",
	},

	input: {
		width: "75%",
		height: "100%",
		border: "0px solid transparent",
		color: theme.palette.colors.violetMedium,

		"&:focus": {
			outline: "none",
		},

		"&::placeholder": {
			color: theme.palette.colors.violetMedium,
		},
	},

	loadingContainer: {
		height: "50vh",
	},

	centererd: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	dictionaryNav: {
		width: "100%",
		height: "10%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignContent: "center",
		alignItems: "center",
	},

	dictionaryContainer: {
		width: "100%",
		height: "90%",
	},

	card: {
		width: "80%",
		height: "80%",
		background: "white",
		borderRadius: 20,

		position: "absolute",

		border: `0.5px solid ${theme.palette.colors.violetMedium}`,
		boxShadow: `10px 10px 5px ${theme.palette.colors.violetLight}`,

		padding: "5% 5% 0 5%",
	},

	word: {
		fontSize: 16,
		fontWeight: 600,
		borderBottom: `1px solid ${theme.palette.colors.violetText}`,
		color: theme.palette.colors.violetText,

		marginBottom: 25,
		textAlign: "center",
	},

	meaning: {
		fontSize: 14,
		textAlign: "center",

		marginBottom: 50,
	},

	exampleHead: {
		fontSize: 14,
		fontWeight: 600,
		textAlign: "center",

		marginBottom: 5,
		color: theme.palette.colors.violetDark,
	},

	example: {
		fontSize: 14,
		textAlign: "center",
		color: theme.palette.colors.violetText,
		fontStyle: "italic",
	},
}));

export default styles;
