import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "80%",
		height: "90%",
		background: "white",
		borderRadius: 30,

		position: "absolute",
	},

	transition: {
		transformOrigin: "left",
		transform: "translate(-150%, -15%) rotate(-25deg)",
		transitionDuration: "1.0s",
	},

	question: {
		height: "25%",
		width: "100%",
		paddingLeft: "5%",
		paddingRight: "5%",

		borderRadius: "30px 30px 0px 0px",
		fontSize: 18,
	},

	optionContainer: {
		height: "75%",
		width: "100%",
		paddingLeft: "5%",
		paddingRight: "5%",

		borderRadius: "0px 0px 30px 30px",
	},

	opt: {
		width: "100%",
		padding: 15,
		borderRadius: 30,
		cursor: "pointer",
		border: "1px solid black",

		[theme.breakpoints.down("sm")]: {
			height: 100,
		},

		[theme.breakpoints.up("md")]: {
			height: "100%",
		},
	},

	optImage: {
		width: "100%",
		height: "auto",
	},

	hi: {
		//boxShadow: `10px 10px 15px ${theme.palette.colors.secondary}`,
	},

	lo: {
		//boxShadow: `2px 3px 4px ${theme.palette.colors.secondary}`,
	},

	centered: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
}));

export default styles;
