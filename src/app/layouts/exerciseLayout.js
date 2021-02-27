import React, {useState} from "react";
import PropTypes from "prop-types";
import {makeStyles, TextField} from "@material-ui/core";

import QuestionNumber from "../components/QuestionNumber";
import Button from "../components/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import MenuIcon from "@material-ui/icons/Menu";
import colors from "../styles/colors";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},

	nav: {
		height: "15vh",
		background: "white",
	},

	outerNav: {
		width: "100%",
		height: "60%",
		position: "relative",
	},

	barContainer: {
		width: "100%",
		height: "40%",
		padding: "0px 5% 0px 5%",
	},

	upperNav: {
		width: "100%",
		position: "absolute",
	},

	container: {
		width: "100%",
		background: "white",

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",

		padding: "0px 5% 0px 5%",
	},

	btnContainer: {
		height: "15vh",
		flexWrap: "wrap",
	},

	child: {
		height: "70vh",
		width: "100%",
		background: "white",
	},

	childScrollable: {
		width: "100%",
		background: "white",
	},

	btn: {
		width: "45%",
		height: 40,
	},

	m10: {
		[theme.breakpoints.down("sm")]: {
			marginBottom: 10,
		},

		[theme.breakpoints.up("md")]: {
			marginBottom: 0,
		},
	},

	btn1: {
		color: theme.palette.colors.primary,
		background: "white",
		border: `1px solid ${theme.palette.colors.primary}`,
		boxSizing: "border-box",
		boxShadow: `0px 4px 4px ${theme.palette.colors.primary}`,
		borderRadius: 10,
	},

	btn2: {
		color: "white",
		background: theme.palette.colors.primary,
		boxSizing: "border-box",
		boxShadow: `0px 4px 4px rgba(128, 0, 255, 0.5)`,
		borderRadius: 10,
	},

	btn3: {
		color: "white",
		background: theme.palette.colors.primary,
		boxSizing: "border-box",
		borderRadius: 10,
	},

	nameContainer: {
		width: "100%",
		height: "100%",
		position: "absolute",

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",

		fontSize: 16,
		fontWeight: 600,
	},

	iconContainer: {
		width: "100%",
		height: "100%",
		paddingLeft: "5%",
		position: "absolute",

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignContent: "center",
		alignItems: "center",
	},

	menuBtn: {
		color: theme.palette.colors.primary,
		fontSize: 30,
		cursor: "pointer",
	},

	cancelIconContainer: {
		height: "100%",
		width: "100%",
		paddingLeft: "5%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignContent: "center",
		alignItems: "center",
	},

	sidebar: {
		position: "absolute",
		height: "100vh",
		top: 0,
		zIndex: 5,
		background: theme.palette.colors.lightPink,

		overflowY: "auto",

		transformOrigin: "left",
		transitionDuration: "1.0s",

		[theme.breakpoints.down("md")]: {
			width: "70%",
			left: "-70%",
		},

		[theme.breakpoints.up("lg")]: {
			width: "50%",
			left: "-50%",
		},
	},

	textfieldContainer: {
		padding: "25px 5% 25px 5%",
		display: "flex",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",
	},

	textField: {
		width: "60%",
		height: 50,
	},

	searchBtn: {
		width: "30%",
		height: 50,
	},
}));

const ExerciseLayout = (props) => {
	const classes = styles();
	const [showSidebar, setShowSidebar] = useState(true);
	const [dictionarySearch, setDictionarySearch] = useState("");

	const searchWord = () => {};

	return (
		<>
			<div className={classes.sidebar} style={showSidebar ? {left: 0} : null}>
				<div className={`${classes.nav}`} style={{background: colors.lightPink}}>
					<div className={classes.cancelIconContainer}>
						<CancelIcon className={classes.menuBtn} onClick={() => setShowSidebar(false)} />
					</div>
				</div>

				<div className={classes.textfieldContainer}>
					<TextField
						variant="outlined"
						onChange={(e) => setDictionarySearch(e.target.value)}
						value={dictionarySearch}
						name="dictionary_search"
						className={classes.textField}
					/>

					<div className={classes.searchBtn}>
						<Button styles={classes.btn3} text="Search" onClick={searchWord} />
					</div>
				</div>
			</div>
			<div className={classes.root} style={showSidebar ? {filter: "blur(4px)"} : {}}>
				<div className={`${classes.nav}`}>
					<div className={classes.outerNav}>
						<div className={classes.nameContainer}>{props.exerciseName}</div>
						<div className={classes.iconContainer}>
							<MenuIcon className={classes.menuBtn} onClick={() => setShowSidebar(true)} />
						</div>
					</div>

					<div className={classes.barContainer}>
						<QuestionNumber
							totalQuestions={props.totalQuestions}
							currentQuestionNumber={props.currentQuestionNumber}
						/>
					</div>
				</div>
				<div className={props.scrollable ? classes.childScrollable : classes.child}>
					{props.children}
				</div>
				<div className={`${classes.btnContainer} ${classes.container}`}>
					<div className={`${classes.btn}`}>
						<Button styles={classes.btn1} text="Skip" onClick={props.skip} />
					</div>

					<div className={classes.btn}>
						<Button styles={classes.btn2} text="Check" onClick={props.check} />
					</div>
				</div>
			</div>
		</>
	);
};

ExerciseLayout.propTypes = {
	children: PropTypes.object.isRequired,
	exerciseName: PropTypes.string.isRequired,
	skip: PropTypes.func.isRequired,
	check: PropTypes.func.isRequired,
	backToHome: PropTypes.func.isRequired,
	totalQuestions: PropTypes.number.isRequired,
	currentQuestionNumber: PropTypes.number.isRequired,
	scrollable: PropTypes.bool,
};

export default ExerciseLayout;
