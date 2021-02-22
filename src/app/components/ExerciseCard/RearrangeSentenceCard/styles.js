import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "90%",
		minHeight: "70vh",
		background: "white",
	},

	context: {
		fontWeight: 500,
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
