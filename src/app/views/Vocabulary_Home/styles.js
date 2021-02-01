import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},

	centered: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	imageContainer: {
		height: "50vh",
		width: "100%",
		position: "relative",
	},

	imageUpper: {
		width: "100%",
		height: "100%",
		position: "absolute",
	},

	img: {
		height: "100%",
		width: "auto",
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
}));

export default styles;
