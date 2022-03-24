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

	spondonImage: {
		width: 150,
		height: 150,
		float: "left",
		marginRight: 10,
	},

	memoir: {
		textAlign: "justify",
	},

	memoirHead1: {
		color: theme.palette.colors.primary,
		fontWeight: 500,
		fontSize: 20,
	},

	memoirHead2: {
		color: theme.palette.colors.bluishViolet,
		fontWeight: 700,
		fontSize: 20,
	},

	devCardContainer: {
		width: "100%",
	},

	gridroot: {
		flexGrow: 1,
		width: "100%",
	},

	teamHeading: {
		color: theme.palette.colors.bluishViolet,
		fontWeight: 700,
		fontSize: 20,
		marginTop: 50,
	},

	devContainer: {
		marginTop: 50,
	},
}));

export default styles;
