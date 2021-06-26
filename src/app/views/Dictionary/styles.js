import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},

	navContainer: {
		height: 70,
		width: "100%",
		position: "fixed",
		zIndex: 2,
	},

	contentContainer: {
		padding: "100px 5% 5% 5%",
	},

	searchContainer: {
		width: "100%",
		height: 40,
		borderRadius: 20,
		padding: 5,

		border: `2px solid ${theme.palette.colors.violetMedium}`,

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignContent: "center",
		alignItems: "center",
	},

	input: {
		width: "75%",
		height: "100%",
		border: "0px solid transparent",
		color: theme.palette.colors.violetMedium,

		"&:focus": {
			outline: "none",
		},

		"&::placeholder": {
			color: theme.palette.colors.violetMedium,
		},
	},

	menuBtn: {
		color: theme.palette.colors.primary,
		fontSize: 30,
		cursor: "pointer",
	},

	word: {
		fontSize: 16,
		fontWeight: 600,
		borderBottom: `1px solid ${theme.palette.colors.violetText}`,
		color: theme.palette.colors.violetText,

		marginBottom: 25,
		textAlign: "center",
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

	dictionaryContainer: {
		width: "100%",
		marginTop: 50,
	},

	card: {
		width: "100%",
		background: "white",
		borderRadius: 20,

		border: `0.5px solid ${theme.palette.colors.violetMedium}`,
		boxShadow: `10px 10px 5px ${theme.palette.colors.violetLight}`,

		padding: "5% 5% 0 5%",
	},
}));

export default styles;
