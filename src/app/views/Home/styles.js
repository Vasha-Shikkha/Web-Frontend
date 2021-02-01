import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100vh",
	},

	centered: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	navContainer: {
		height: "15vh",
		width: "100%",
	},

	homeImgContainer: {
		height: "35vh",
		width: "100%",
	},

	taskContainer: {
		padding: "0 5% 0 5%",
	},

	homeImg: {
		height: "100%",
		width: "auto",
	},

	heading: {
		fontFamily: "Montserrat",
		fontSize: 25,
		fontWeight: 600,

		marginBottom: 10,
		marginTop: 50,
	},

	description: {
		fontFamily: "Montserrat",
		fontSize: 18,
		fontWeight: 400,
	},

	boxContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",
		marginTop: 25,
	},

	box: {
		width: "47%",
		height: "auto",
		cursor: "pointer",

		padding: "5%",
		background: theme.palette.colors.violetMedium,

		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",

		marginBottom: 50,
		[theme.breakpoints.down("md")]: {
			borderRadius: 20,
		},
		[theme.breakpoints.up("lg")]: {
			borderRadius: 40,
		},
	},

	thumbnail: {
		width: "100%",
		height: "auto",

		marginBottom: 10,
	},

	img: {
		width: "100%",
	},

	boxText: {
		fontFamily: "Montserrat",
		fontWeight: 600,
		color: theme.palette.colors.violetDark,

		[theme.breakpoints.down("md")]: {
			fontSize: 16,
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: 25,
		},
	},

	btn: {
		background: theme.palette.colors.primary,
		color: "white",
		width: "150px",
		height: "50px",

		marginTop: "30px",
		borderRadius: 30,
		cursor: "pointer",
		textDecoration: "none",
	},
}));

export default styles;
