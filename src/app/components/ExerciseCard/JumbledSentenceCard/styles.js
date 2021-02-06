import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "90%",
		padding: "0 5% 0 5%",

		position: "absolute",
		background: "white",
	},

	transition: {
		transformOrigin: "left",
		transform: "translate(-150%, -15%) rotate(-25deg)",
		transitionDuration: "1.0s",
	},

	context: {
		fontWeight: 500,
		fontSize: 14,
		marginBottom: 25,
	},

	shuffledWordContainer: {
		marginBottom: 25,

		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignContent: "center",
		alignItems: "center",
	},

	shuffledWordActive: {
		padding: "15px 20px 15px 20px",
		borderRadius: 10,
		marginRight: 10,
		userSelect: "none",
		cursor: "pointer",
		boxShadow: `0px 5px 10px ${theme.palette.colors.secondary}`,
	},

	shuffledWordInactive: {
		padding: "15px 20px 15px 20px",
		background: "#D0CDE1",
		color: "#D0CDE1",
		borderRadius: 10,
		marginRight: 10,
		userSelect: "none",
		cursor: "pointer",
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
