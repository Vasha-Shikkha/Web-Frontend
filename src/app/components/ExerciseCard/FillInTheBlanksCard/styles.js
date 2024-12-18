import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		paddingTop: 25,
		paddingRight: 5,
	},

	transition: {
		transformOrigin: "left",
		transform: "translate(-150%, -15%) rotate(-25deg)",
		transitionDuration: "1.0s",
	},

	context: {
		fontSize: 18,
		fontWeight: 600,
	},

	optionContainer: {
		width: "100%",

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

	questionContainer: {
		marginBottom: 25,

		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	},

	word: {
		margin: "10px 5px 5px 5px",
		userSelect: "none",
	},

	hi: {
		boxShadow: `10px 10px 15px ${theme.palette.colors.secondary}`,
	},

	lo: {
		boxShadow: `2px 3px 4px ${theme.palette.colors.secondary}`,
	},

	explanation: {
		marginBottom: "5%",
		fontSize: 16,
		fontWeight: "bold",
	},
}));

export default styles;
