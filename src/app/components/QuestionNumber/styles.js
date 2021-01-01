import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		height: 50,
		width: 100,
		background: "white",
		borderRadius: 30,

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	num: {
		color: theme.palette.colors.textLight,
	},

	slash: {
		color: "grey",
		marginLeft: 3,
		marginRight: 3,
	},
}));

export default styles;
