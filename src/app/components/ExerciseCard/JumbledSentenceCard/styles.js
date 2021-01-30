import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "80%",
		height: "90%",
		background: "white",
		borderRadius: 30,

		position: "absolute",
	},

	transition: {
		transformOrigin: "left",
		transform: "translate(-150%, -15%) rotate(-25deg)",
		transitionDuration: "1.0s",
	},

	instruction: {
		height: "15%",
		width: "100%",
		borderRadius: "30px 30px 0px 0px",

		fontSize: 18,
		fontWeight: 500,
	},

	wordContainer: {
		height: "85%",
		width: "100%",
		padding: "5%",
		borderRadius: "0px 0px 30px 30px",
		overflow: "hidden",

		display: "flex",
		flexWrap: "wrap",

		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	box: {
		padding: "15px 20px 15px 20px",
		borderRadius: 30,
		margin: 15,
		userSelect: "none",
		cursor: "pointer",
		boxShadow: `2px 3px 4px ${theme.palette.colors.secondary}`,
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
