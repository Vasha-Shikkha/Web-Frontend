import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "90%",
		minHeight: "70vh",
		background: "white",
	},

	transition: {
		transformOrigin: "left",
		transform: "translate(-150%, -15%) rotate(-25deg)",
		transitionDuration: "1.0s",
	},

	optionContainer: {
		padding: "5%",
	},

	options: {
		padding: 10,
		fontSize: 18,

		borderRadius: 30,
		boxShadow: `2px 3px 4px ${theme.palette.colors.secondary}`,
		cursor: "pointer",
		userSelect: "none",
	},

	centered: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
}));

export default styles;
