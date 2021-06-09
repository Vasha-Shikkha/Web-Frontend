import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",

		position: "fixed",

		zIndex: 100,

		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",

		padding: "0% 5% 0% 5%",

		[theme.breakpoints.down("600")]: {
			height: "35vh",
			bottom: "-35vh",
		},
		[theme.breakpoints.up("600")]: {
			height: "20vh",
			bottom: "-20vh",
		},
	},

	anime: {
		[theme.breakpoints.down("600")]: {
			transform: "translateY(-35vh)",
		},
		[theme.breakpoints.up("600")]: {
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

	btnWrapper: {
		width: 150,
		height: 50,
	},

	right: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",

		[theme.breakpoints.down("600")]: {
			marginTop: 15,
		},
		[theme.breakpoints.up("600")]: {
			marginTop: 0,
		},
	},

	correct_btn: {
		color: "white",
		background: "#73af55",
	},

	incorrect_btn: {
		color: theme.palette.colors.incorrect,
		background: " #d06079",

		[theme.breakpoints.down("600")]: {
			marginTop: 15,
		},
		[theme.breakpoints.up("600")]: {
			marginTop: 0,
		},
	},

	try_again_btn: {
		color: "white",
		background: "lightcoral",
	},

	show_answer_btn: {
		color: "white",
		background: "skyblue",

		[theme.breakpoints.down("600")]: {
			marginTop: 15,
		},
		[theme.breakpoints.up("600")]: {
			marginTop: 0,
		},
	},
}));

export default styles;
