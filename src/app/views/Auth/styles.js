import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100vh",
		background: theme.palette.colors.background,
	},

	upper: {
		width: "100%",
		padding: "2% 5% 2% 5%",
		[theme.breakpoints.down("xs")]: {
			height: "85vh",
			background: "white",
			borderRadius: "0px 0px 0px 40px",
		},

		[theme.breakpoints.up("sm")]: {
			height: "65vh",
			background: theme.palette.colors.background,
		},
	},

	lower: {
		width: "100%",
		background: theme.palette.colors.background,

		[theme.breakpoints.down("xs")]: {
			height: "15vh",
		},

		[theme.breakpoints.up("sm")]: {
			height: "35vh",
		},
	},

	nav: {
		height: "10%",
		width: "100%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",
	},

	fieldContainer: {
		height: "90%",
		width: "100%",

		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	txtField: {
		marginBottom: 20,

		[theme.breakpoints.down(350)]: {
			width: "100%",
		},

		[theme.breakpoints.up(350)]: {
			width: 300,
		},
	},

	logo: {
		fontSize: 20,
	},

	logoBold: {
		fontWeight: 600,
		fontSize: 20,
	},

	authBtnContainer: {
		display: "flex",
		alignContent: "center",
		alignItems: "center",
	},

	activeAuth: {
		color: theme.palette.colors.textLight,
		cursor: "pointer",
		fontWeight: 600,
	},

	inactiveAuth: {
		color: "grey",
		cursor: "pointer",
		fontWeight: 500,
	},

	centered: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	btn: {
		background: theme.palette.colors.primary,
		color: "white",
		width: "150px",
		height: "50px",

		borderRadius: 30,
		cursor: "pointer",
	},
}));

export default styles;
