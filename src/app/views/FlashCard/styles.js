import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		padding: "0 5% 0 5%",
		background: "white",
	},

	navContainer: {
		height: "15vh",
		width: "100%",
		position: "relative",
	},

	nav_inner: {
		position: "absolute",
		height: "100%",
		width: "100%",

		color: theme.palette.colors.violetDark,
		fontSize: 18,
	},

	crossContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},

	cross: {
		color: theme.palette.colors.mediumPink,
		height: 30,
		width: 30,
		cursor: "pointer",
	},

	contentContainer: {
		height: "70vh",
		width: "100%",
		position: "relative",
	},

	card: {
		width: "80%",
		height: "90%",
		background: "white",
		borderRadius: 20,

		position: "absolute",

		border: `0.5px solid ${theme.palette.colors.violetMedium}`,
		boxShadow: `10px 10px 5px ${theme.palette.colors.violetLight}`,

		padding: "5% 5% 0 5%",
	},

	word: {
		fontSize: 16,
		fontWeight: 600,
		borderBottom: `1px solid ${theme.palette.colors.violetText}`,
		color: theme.palette.colors.violetText,

		marginBottom: 25,
	},

	meaning: {
		fontSize: 14,
		textAlign: "center",

		marginBottom: 50,
	},

	exampleHead: {
		fontSize: 14,
		fontWeight: 600,
		textAlign: "center",

		marginBottom: 5,
		color: theme.palette.colors.violetDark,
	},

	example: {
		fontSize: 14,
		textAlign: "center",
		color: theme.palette.colors.violetText,
		fontStyle: "italic",
	},

	btnContainer: {
		height: "15vh",
		width: "100%",
	},

	btn: {
		height: "50%",
		width: "100%",
		color: "white",
		background: theme.palette.colors.violetMedium,
		borderRadius: 10,
	},

	centered: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	rotate5: {
		[theme.breakpoints.down(700)]: {
			transform: "rotate(-5deg)",
		},

		[theme.breakpoints.up(700)]: {
			transform: "rotate(0deg)",
		},
	},

	rotate10: {
		[theme.breakpoints.down(700)]: {
			transform: "rotate(-10deg)",
		},

		[theme.breakpoints.up(700)]: {
			transform: "rotate(0deg)",
		},
	},
}));

export default styles;
