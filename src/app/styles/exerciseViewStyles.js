import {makeStyles} from "@material-ui/core";

const styles = makeStyles(() => ({
	root: {
		width: "100%",
		height: "100%",
		overflowY: "auto",
		overflowX: "hidden",

		position: "relative",
	},

	loadingContainer: {
		height: "100vh",
	},

	scrollableRoot: {
		width: "100%",
		background: "white",
	},

	centered: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	answerContainer: {
		display: "grid",
		placeItems: "center",
		padding: 25,
		overflowY: "auto",
	},
}));

export default styles;
