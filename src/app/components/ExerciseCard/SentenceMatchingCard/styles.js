import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "90%",
		background: "white",
	},

	undo: {
		background: theme.palette.colors.primary,
		marginBottom: 25,
		padding: 10,
		width: 100,
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
	},

	options: {
		width: "95%",
		height: 60,

		padding: 10,
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
}));

export default styles;
