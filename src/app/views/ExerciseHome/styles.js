import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},

	navContainer: {
		height: 70,
		width: "100%",
		position: "fixed",
		zIndex: 2,
	},

	contentContainer: {
		padding: "100px 5% 5% 5%",
	},

	exerciseContainer: {
		marginTop: 25,
	},

	box: {
		width: "100%",
		padding: 20,
		borderRadius: 10,
		background: theme.palette.colors.lightPink,

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		cursor: "pointer",

		marginBottom: 25,
	},

	boxTitleContainer: {
		height: "100%",
		display: "flex",
		flexDirection: "row",
	},

	boxLinkContainer: {
		height: "100%",
		display: "flex",
		flexDirection: "row",
	},

	boxLinks: {
		color: theme.palette.colors.violetMedium,
		fontWeight: 500,
		cursor: "pointer",

		"&:nth-last-child(1)": {
			marginLeft: 10,
		},
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
		zIndex: 1,
	},
}));

export default styles;
