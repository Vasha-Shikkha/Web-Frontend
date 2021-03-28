import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "90%",
		minHeight: "50vh",
		background: "white",
	},

	context: {
		fontWeight: 500,
		fontSize: 14,
		marginBottom: 25,
	},

	wordContainer: {
		marginBottom: 25,

		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignContent: "center",
		alignItems: "center",
	},

	answerContainer: {
		marginTop: 50,
		position: "relative",
		height: 200,
		width: "100%",
	},

	answerContainerInner: {
		position: "absolute",
		height: "inherit",
		width: "100%",

		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignContent: "flex-start",
		alignItems: "flex-start",
	},

	options: {
		padding: "15px 20px 15px 20px",
		borderRadius: 10,
		marginRight: 10,
		marginBottom: 10,
		userSelect: "none",
		cursor: "pointer",
		boxShadow: `0px 5px 10px ${theme.palette.colors.secondary}`,
	},

	lineContainer: {
		width: "100%",
		position: "absolute",
	},

	line: {
		width: "100%",
		padding: 20,
		borderBottom: "1px solid #2F2E41",
		color: "transparent",
		userSelect: "none",
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