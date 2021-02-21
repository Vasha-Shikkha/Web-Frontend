import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "90%",
		minHeight: "70vh",
		background: "white",

		display: "flex",
	},

	optionContainer: {
		width: "50%",

		display: "flex",
		flexDirection: "column",
	},

	options: {
		width: "95%",
		height: 50,

		padding: 10,
		fontSize: 12,
		marginBottom: 15,
		borderRadius: 10,

		textAlign: "center",
		boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
		background: "white",
		cursor: "pointer",
		userSelect: "none",

		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
}));

export default styles;
