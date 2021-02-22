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

	options: {
		padding: "15px 20px 15px 20px",
		borderRadius: 10,
		marginRight: 10,
		marginBottom: 10,
		userSelect: "none",
		cursor: "pointer",
		boxShadow: `0px 5px 10px ${theme.palette.colors.secondary}`,
	},

	answerContainer: {
		marginTop: 50,
		position: "relative",
		height: 200,
		width: "100%",
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
