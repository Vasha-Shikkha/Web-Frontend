import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		height: "20vh",
		width: "100%",

		position: "fixed",
		zIndex: 2,
		bottom: "-20vh",

		//transformOrigin: "left",
	},

	anime: {
		transform: "translateY(-20vh)",
		transition: "all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
	},

	correct: {
		background: theme.palette.colors.correct,
		color: "#73af55",
	},

	incorrect: {
		background: theme.palette.colors.incorrect,
		color: "#d06079",
	},
}));

export default styles;
