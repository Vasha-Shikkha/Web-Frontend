import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignContent: "center",
		alignItems: "center",
	},

	image: {
		height: 150,
		width: 150,
		borderRadius: "100%",
		objectFit: "cover",
		objectPosition: "center",
	},

	name: {
		color: theme.palette.colors.primary,
		fontSize: 20,
		fontWeight: "bolder",
	},

	type: {
		color: theme.palette.colors.primary,
		fontWeight: 500,
		marginTop: 3,
	},

	description: {
		width: "100%",
		marginTop: 10,
	},
}));

export default styles;
