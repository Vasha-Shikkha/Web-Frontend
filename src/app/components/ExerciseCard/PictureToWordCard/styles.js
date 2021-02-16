import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "90%",
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
		height: "60%",
		width: "100%",
		padding: "0% 5% 5% 5%",
		borderRadius: "30px 30px 0px 0px",

		fontSize: 18,
	},

	questionImage: {
		height: "70%",
		width: "auto",

		objectFit: "cover",
		objectPosition: "center",

		marginTop: 25,
	},

	optionContainer: {
		height: "40%",
		width: "100%",
		padding: "0% 5% 0% 5%",
		borderRadius: "0px 0px 30px 30px",
		flexGrow: 1,
	},

	opt: {
		padding: "10px 15px 10px 15px",
		borderRadius: 10,
		margin: 10,
		cursor: "pointer",
	},

	hi: {
		boxShadow: `0px 20px 25px rgba(0, 0, 0, 0.25)`,
	},

	lo: {
		boxShadow: `0px 5px 10px ${theme.palette.colors.secondary}`,
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
