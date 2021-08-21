import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		padding: "0% 5% 5% 5%",
	},

	centered: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	noNotesFoundText: {
		fontSize: 20,
		fontWeight: 500,
		color: theme.palette.colors.violetMedium,
	},
}));

export default styles;
