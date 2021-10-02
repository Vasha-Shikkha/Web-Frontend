import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		background: "white",
		paddingTop: 25,
		paddingRight: 5,
	},

	undo: {
		background: theme.palette.colors.primary,
		width: 100,
		padding: 5,
		color: "white",
	},

	optionsOuter: {
		display: "flex",
		minHeight: "70vh",
	},

	optionContainer: {
		width: "50%",

		display: "flex",
		flexDirection: "column",
		alignItems: "stretch",
	},

	options: {
		width: "95%",

		// [theme.breakpoints.down("360")]: {
		// 	height: 160,
		// },
		// [theme.breakpoints.up("360")]: {
		// 	height: 140,
		// },
		// [theme.breakpoints.up("600")]: {
		// 	height: 100,
		// },

		padding: 15,
		fontSize: 16,
		marginBottom: 15,
		borderRadius: 10,

		textAlign: "center",
		boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
		background: "white",
		cursor: "pointer",
		userSelect: "none",

		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	instruction: {
		//lineHeight: 1.5,
	},

	explanation: {
		marginBottom: 30,
		fontSize: 16,
		fontWeight: "bold",
	},
}));

export default styles;
