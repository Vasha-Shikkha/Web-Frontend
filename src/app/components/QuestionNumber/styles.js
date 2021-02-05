import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		height: "100%",
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
		transition: "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
	},
}));

export default styles;
