import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		padding: 20,

		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		alignContent: "center",
	},

	header: {
		fontSize: 25,
		fontWeight: 600,

		marginBottom: 20,
	},

	image: {
		width: 150,
		height: 150,

		marginBottom: 20,
	},

	scoreText: {
		color: "grey",
		fontSize: 20,

		marginBottom: 20,
	},

	okButton: {
		borderRadius: 10,
		padding: 10,
	},

	correct: {
		color: "white",
		background: "#73af55",
	},

	incorrect: {
		color: theme.palette.colors.incorrect,
		background: " #d06079",
	},
}));

export default styles;
