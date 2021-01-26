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
		height: "30%",
		width: "100%",

		paddingLeft: "5%",
		paddingRight: "5%",

		borderRadius: "30px 30px 0px 0px",
		fontSize: 18,
	},

	optionContainer: {
		height: "70%",
		width: "100%",
		borderRadius: "0px 0px 30px 30px",
	},

	opt: {
		padding: 15,
		borderRadius: 30,
		cursor: "pointer",

		[theme.breakpoints.down("md")]: {
			width: 130,
			height: 130,
		},

		[theme.breakpoints.up("lg")]: {
			width: 200,
			height: 200,
		},
	},

	optMarginBottom: {
		[theme.breakpoints.down("600")]: {
			marginBottom: 10,
		},

		[theme.breakpoints.up("600")]: {
			marginBottom: 0,
		},
	},

	optImage: {
		width: "100%",
		height: "100%",

		objectFit: "cover",
		objectPosition: "center",
	},

	hi: {
		boxShadow: `10px 10px 15px ${theme.palette.colors.secondary}`,
	},

	lo: {
		boxShadow: `2px 3px 4px ${theme.palette.colors.secondary}`,
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
