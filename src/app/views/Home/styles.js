import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},

	contentContainer: {
		paddingTop: 20,
	},

	centered: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	navContainer: {
		height: 70,
		width: "100%",
	},

	homeImgContainer: {
		height: "30vh",
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
		fontSize: 25,
		fontWeight: 549,

		marginBottom: 10,
		marginTop: 50,

		[theme.breakpoints.down("sm")]: {
			textAlign: "left",
		},

		[theme.breakpoints.up("md")]: {
			textAlign: "center",
		},
	},

	description: {
		fontFamily: "Montserrat",
		fontSize: 18,
		fontWeight: 400,

		[theme.breakpoints.down("sm")]: {
			textAlign: "left",
		},

		[theme.breakpoints.up("md")]: {
			textAlign: "center",
		},
	},

	boxContainer: {
		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
		marginTop: 25,

		[theme.breakpoints.down("sm")]: {
			justifyContent: "space-between",
		},

		[theme.breakpoints.up("md")]: {
			justifyContent: "center",
		},
	},

	box: {
		height: "auto",
		cursor: "pointer",
		textDecoration: "none",
		background: theme.palette.colors.violetMedium,

		display: "flex",
		alignContent: "center",
		alignItems: "center",

		marginBottom: 50,
		borderRadius: 20,

		[theme.breakpoints.down("sm")]: {
			width: "47%",
			flexDirection: "column",
			justifyContent: "space-between",
			padding: "5%",
		},

		[theme.breakpoints.up("md")]: {
			width: "30%",
			flexDirection: "row",
			justifyContent: "flex-start",
			padding: "2%",
		},
	},

	m20: {
		[theme.breakpoints.down("sm")]: {
			marginRight: 0,
		},

		[theme.breakpoints.up("md")]: {
			marginRight: 25,
		},
	},

	thumbnail: {
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			height: "auto",
			marginBottom: 10,
		},
		[theme.breakpoints.up("md")]: {
			width: "width",
			height: 100,
			marginRight: 25,
		},
	},

	img: {
		width: "100%",
	},

	boxText: {
		fontFamily: "Montserrat",
		fontWeight: 600,
		color: "white",

		[theme.breakpoints.down("md")]: {
			fontSize: 16,
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: 20,
		},
	},
}));

export default styles;
