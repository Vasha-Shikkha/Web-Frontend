import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		position: "fixed",

		zIndex: 100,
		flexGrow: 1,

		padding: 25,

		[theme.breakpoints.down("md")]: {
			height: "30vh",
			bottom: "-30vh",
		},
		[theme.breakpoints.up("md")]: {
			height: "20vh",
			bottom: "-20vh",
		},
	},

	anime: {
		[theme.breakpoints.down("md")]: {
			transform: "translateY(-30vh)",
		},
		[theme.breakpoints.up("md")]: {
			transform: "translateY(-20vh)",
		},

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

	left_text: {
		fontSize: 20,
		fontWeight: 600,
		marginLeft: 10,
	},

	btnWrapper: {
		width: "100%",
		height: 50,
	},

	correct_btn: {
		color: "white",
		background: "#73af55",
		borderRadius: 10,
	},

	incorrect_btn: {
		color: theme.palette.colors.incorrect,
		background: " #d06079",
		borderRadius: 10,
	},

	try_again_btn: {
		color: "white",
		background: "lightcoral",
		borderRadius: 10,
	},

	show_answer_btn: {
		color: "white",
		background: "skyblue",
		borderRadius: 10,
	},

	verdictImage: {
		width: 100,
		height: 100,
	},

	svgContainer: {
		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
	},

	imgContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "row",

		[theme.breakpoints.down("md")]: {
			justifyContent: "flex-end",
		},
		[theme.breakpoints.up("md")]: {
			justifyContent: "flex-start",
		},
	},
}));

export default styles;
