import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "90%",
		minHeight: "65vh",
	},

	transition: {
		transformOrigin: "left",
		transform: "translate(-150%, -15%) rotate(-25deg)",
		transitionDuration: "1.0s",
	},

	context: {
		paddingBottom: "3%",
		paddingTop: "5%",
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
}));

export default styles;
