import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	/* MENU STYLES */
	menu_wrap: {
		position: "absolute",
		top: 10,
		right: -5,
		zIndex: 6,
	},

	menu_wrap_toggler: {
		position: "absolute",
		top: 0,
		right: 0,
		zIndex: 10,

		cursor: "pointer",
		width: "40px",
		height: "40px",

		userSelect: "none",
		opacity: "0",

		"&:checked": {
			menu_wrap_hamburger_div: {
				transform: "rotate(135deg)",
			},
		},
	},

	menu_wrap_hamburger: {
		position: "absolute",
		top: 0,
		right: 0,
		zIndex: 5,
		width: "40px",
		height: "40px",
		backgroundColor: "transparent",

		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},

	/* Hamburger Line */
	menu_wrap_hamburger_div: {
		position: "relative",
		flex: "none",
		width: "70%",
		height: "2px",
		backgroundColor: theme.palette.colors.primary,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		transition: "all 0.4s ease",

		"&:before": {
			content: "''",
			position: "absolute",
			zIndex: 5,
			top: "10px",
			width: "100%",
			height: "2px",
			backgroundColor: theme.palette.colors.primary,
		},

		"&:after": {
			content: "''",
			position: "absolute",
			zIndex: 5,
			top: "-10px",
			width: "100%",
			height: "2px",
			backgroundColor: theme.palette.colors.primary,
		},
	},

	//use this when checked
	menu_wrap_hamburger_div_ifChecked: {
		position: "relative",
		flex: "none",
		width: "70%",
		height: "2px",
		backgroundColor: theme.palette.colors.primary,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		transition: "all 0.4s ease",
		transform: "rotate(135deg)",

		"&:before": {
			content: "''",
			position: "absolute",
			zIndex: 5,
			width: "100%",
			height: "2px",
			backgroundColor: theme.palette.colors.primary,
			top: 0,
			transform: "rotate(90deg)",
		},

		"&:after": {
			content: "''",
			position: "absolute",
			zIndex: 5,
			width: "100%",
			height: "2px",
			backgroundColor: theme.palette.colors.primary,
			top: 0,
			transform: "rotate(90deg)",
		},
	},

	menu: {
		position: "fixed",
		top: 0,
		zIndex: 3,

		height: "100vh",
		width: "75vw",
		transition: "all 0.4s ease-in",

		background: theme.palette.colors.lightPink,

		display: "flex",
		flexDirection: "column",
		flexWrap: "nowrap",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},

	link: {
		color: theme.palette.colors.primary,
		marginBottom: "20px",
		textDecoration: "none",
	},
}));

export default styles;
