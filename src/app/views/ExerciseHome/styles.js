import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		padding: "0% 5% 5% 5%",
		paddingBottom: 100,
	},

	navContainer: {
		height: "15vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},

	tutorial: {
		color: theme.palette.colors.violetMedium,
		fontWeight: 600,
		textDecoration: "underline",
		cursor: "pointer",
	},

	exerciseContainer: {
		marginTop: 25,
	},

	box: {
		width: "100%",
		padding: 10,
		borderRadius: 10,
		background: theme.palette.colors.lightPink,

		display: "flex",
		flexDirection: "row",
		cursor: "pointer",

		marginBottom: 25,
	},

	imageContainer: {
		height: 70,
		width: 70,

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	boxImage: {
		width: "100%",
		height: "100%",
	},

	titleContainer: {
		marginLeft: 10,
	},

	title: {
		fontSize: "16px",
		fontWeight: 600,
		color: "black",
	},

	questionQuantity: {
		fontSize: "14px",
		fontWeight: 400,
		color: "black",
		marginTop: 5,
	},

	paginationContainer: {
		display: "flex",
		justifyContent: "center",
	},
}));

export default styles;
