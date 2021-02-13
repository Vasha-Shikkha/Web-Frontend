import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		padding: "0 5% 0 5%",
		background: "white",
	},

	navContainer: {
		height: "15vh",
		width: "100%",
	},

	contentContainer: {
		height: "70vh",
		width: "100%",
	},

	btnContainer: {
		height: "15vh",
		width: "100%",
	},

	btn: {
		height: "50%",
		width: "100%",
		color: "white",
		background: theme.palette.colors.violetMedium,
		borderRadius: 10,
	},

	centered: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
}));

export default styles;
