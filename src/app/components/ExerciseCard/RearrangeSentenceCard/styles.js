import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "90%",
		minHeight: "50vh",
		background: "white",
	},

	context: {
		fontSize: 14,
		marginBottom: 25,
		fontWeight: "bold",
	},

	contextImageContainer: {
		width: "100%",
		marginBottom: 25,
	},

	contextImage: {
		[theme.breakpoints.down("sm")]: {
			height: "auto",
			width: "100%",
		},

		[theme.breakpoints.up("md")]: {
			height: 300,
			width: "auto",
		},
	},

	sentenceContainer: {
		width: "100%",
		margin: "25px 0px 25px 0px",
	},

	options: {
		width: "100%",
		padding: 20,
		borderRadius: 10,
		marginBottom: 20,

		userSelect: "none",
		cursor: "pointer",
		boxShadow: `0px 5px 10px ${theme.palette.colors.secondary}`,
	},

	centered: {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
}));

export default styles;
