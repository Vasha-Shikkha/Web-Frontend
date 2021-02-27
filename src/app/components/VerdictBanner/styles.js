import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		height: "20vh",
		width: "100%",

		position: "fixed",

		zIndex: 100,
		bottom: "-20vh",

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",

		padding: "0% 5% 0% 5%",
	},

	anime: {
		transform: "translateY(-20vh)",
		transition: "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
	},

	correct: {
		background: theme.palette.colors.correct,
		color: "#73af55",
	},

	incorrect: {
		background: theme.palette.colors.incorrect,
		color: "#d06079",
	},

	left: {
		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
	},

	left_text: {
		fontSize: 20,
		fontWeight: 600,
		marginLeft: 10,
	},

	right: {
		width: 150,
		height: 50,
	},

	correct_btn: {
		color: "white",
		background: "#73af55",
	},

	incorrect_btn: {
		color: theme.palette.colors.incorrect,
		background: " #d06079",
	},
}));

export default styles;
