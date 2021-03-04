import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "90%",
		minHeight: "70vh",
	},

	context: {
		paddingTop: "5%",
		fontSize: 18,
		fontWeight: 600,
	},

	optionContainer: {
		width: "100%",
		marginTop: 20,
		marginBottom: 20,

		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	},

	box: {
		padding: 15,
		borderRadius: 15,
		cursor: "pointer",
		background: "white",
		margin: "0px 15px 15px 0px",
		userSelect: "none",

		boxShadow: `2px 3px 4px ${theme.palette.colors.secondary}`,
	},

	gridroot: {
		flexGrow: 1,
	},

	imageBox: {
		width: "100%",
	},

	image: {
		width: "100%",
		height: "auto",
		marginBottom: 10,
	},

	answerContainer: {
		width: "100%",
		height: 50,
		border: "1px solid black",
	},
}));

export default styles;
