import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		padding: "5%",
	},

	centered: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	backBtnOuter: {
		background: theme.palette.colors.mediumPink,
		height: 30,
		width: 30,
		cursor: "pointer",
		borderRadius: "100%",
	},

	backBtn: {
		color: "white",
	},

	tutorialContainer: {
		paddingTop: "5%",
	},
}));

export default styles;
