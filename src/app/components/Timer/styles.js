import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		height: 50,
		padding: "0 20px 0 20px",
		background: "white",
		borderRadius: 30,

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	backBtn: {
		cursor: "pointer",
		width: 15,
	},

	rem: {
		color: "grey",
		marginLeft: 10,
	},

	time: {
		color: "#E27777",
		marginLeft: 10,
	},
}));

export default styles;
