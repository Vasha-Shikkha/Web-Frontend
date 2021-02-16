import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "90%",
		height: "90%",
		background: "white",

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

		fontSize: 18,
	},

	optionContainer: {
		height: "70%",
		width: "100%",
		flexGrow: 1,

		// using spacing 3 with grid is causing the container to move a bit up
		// it's approx. 12px so manually bringing it down
		marginTop: 12,
	},

	opt: {
		padding: 15,
		borderRadius: 10,
		cursor: "pointer",
		width: "100%",

		[theme.breakpoints.down("md")]: {
			//width: 130,
			height: 130,
		},

		[theme.breakpoints.up("lg")]: {
			//width: 200,
			height: 200,
		},
	},

	optImage: {
		width: "100%",
		height: "100%",

		objectFit: "cover",
		objectPosition: "center",
	},

	hi: {
		boxShadow: `0px 20px 25px ${theme.palette.colors.secondary}`,
	},

	lo: {
		boxShadow: `0px 5px 10px ${theme.palette.colors.secondary}`,
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
