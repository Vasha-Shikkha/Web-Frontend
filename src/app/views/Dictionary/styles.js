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
}));

export default styles;
