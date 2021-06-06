import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "90%",
		//minHeight: "60vh",
	},

	context: {
		paddingTop: "5%",
		fontSize: 18,
		fontWeight: 600,
	},

	optionContainer: {
		width: "100%",
		marginTop: 20,
		marginBottom: 20,

		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	},

	box: {
		padding: 15,
		borderRadius: 15,
		cursor: "pointer",
		background: "white",
		margin: "0px 15px 15px 0px",
		userSelect: "none",

		boxShadow: `2px 3px 4px ${theme.palette.colors.secondary}`,
	},

	gridroot: {
		flexGrow: 1,
		//marginBottom: 100,
	},

	imageBox: {
		width: "100%",
		height: 350,
		background: theme.palette.colors.violetLight,
	},

	image: {
		width: "100%",
		height: "calc(100% - 60px)",

		objectFit: "contain",
		objectPosition: "center",
		marginBottom: 10,
	},

	answerContainer: {
		width: "100%",
		height: 50,
		border: "1px solid black",

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
}));

export default styles;
