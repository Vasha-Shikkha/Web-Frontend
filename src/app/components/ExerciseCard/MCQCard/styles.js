import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "90%",
		minHeight: "50vh",
		background: "white",
	},

	question: {
		height: "30%",
		width: "100%",
		textAlign: "center",
		marginBottom: 50,

		fontSize: 18,
	},

	optionContainer: {
		//height: "70%",
		width: "100%",
		flexGrow: 1,
	},

	opt: {
		width: "100%",
		height: "auto",
		padding: 15,
		borderRadius: 30,
		cursor: "pointer",
	},

	hi: {
		boxShadow: `10px 10px 15px ${theme.palette.colors.secondary}`,
	},

	lo: {
		boxShadow: `2px 3px 4px ${theme.palette.colors.secondary}`,
	},

	centered: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	instruction: {
		paddingBottom: 25,
		paddingTop: 25,
		lineHeight: 1.5,
		marginBottom: 50,
	},

	questionContainer: {
		marginBottom: 100,
	},

	explanation: {
		marginTop: 30,
		fontSize: 16,
		fontWeight: "bold",
	},
}));

export default styles;
