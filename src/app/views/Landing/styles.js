import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},

	navContainer: {
		height: 70,
		width: "100%",
		position: "fixed",
		zIndex: 2,
	},

	contentContainer: {
		paddingTop: 70,
	},

	container: {
		flexGrow: 1,
		marginTop: 25,
		paddingLeft: "5%",
		paddingRight: "5%",
	},

	gridItem: {
		//background: "yellow",
	},

	homeImgContainer: {
		display: "flex",
		justifyContent: "center",
	},

	homeImg: {
		height: "auto",

		[theme.breakpoints.down("cs")]: {
			width: "80%",
		},

		[theme.breakpoints.up("sm")]: {
			width: "100%",
		},
	},

	intro1Head: {
		fontSize: 25,
		fontWeight: "bold",
		marginBottom: 10,
		color: theme.palette.colors.primary,
	},

	intro1Description: {
		width: "100%",
		wordSpacing: "1.5px",
		marginBottom: 25,
	},

	getStarted: {
		height: 40,
		width: 200,
		borderRadius: 10,
		cursor: "pointer",

		display: "grid",
		placeContent: "center",

		background: theme.palette.colors.violetMedium,
		color: "white",
	},

	section1: {
		width: "100%",
		background: theme.palette.colors.violetLight,
		paddingTop: "5%",
		paddingBottom: "5%",
		marginTop: 50,
	},

	section1Text: {
		fontWeight: 500,
		fontSize: 32,
		//lineHeight: 39,
	},

	centered: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	btn: {
		background: theme.palette.colors.primary,
		color: "white",
		width: "150px",
		height: "50px",

		marginTop: "30px",
		borderRadius: 30,
		cursor: "pointer",
		textDecoration: "none",
	},
}));

export default styles;
