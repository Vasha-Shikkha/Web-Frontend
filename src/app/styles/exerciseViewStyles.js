import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "65vh",
		background: theme.palette.colors.background,

		position: "relative",
	},

	scrollableRoot: {
		width: "100%",
		background: theme.palette.colors.background,
	},

	centered: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
}));

export default styles;
