import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100vh",
		padding: "5%",
		background: theme.palette.colors.primary,
	},

	head: {
		color: "white",
		fontSize: 24,
		fontWeight: 600,
		marginBottom: 50,
		textAlign: "center",
	},

	lnk: {
		color: "white",
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
