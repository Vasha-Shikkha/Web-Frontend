import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		height: 50,
		width: "100%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	outer: {
		width: "100%",
		height: 15,
		borderRadius: 10,
		background: theme.palette.colors.violetLight,

		position: "relative",
	},

	inner: {
		height: 15,
		borderRadius: 10,
		background: theme.palette.colors.violetMedium,
		position: "absolute",
	},
}));

export default styles;
