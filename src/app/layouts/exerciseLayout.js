import {makeStyles} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

import QuestionNumber from "../components/QuestionNumber";
import Button from "../components/Button";
import CancelIcon from "@material-ui/icons/Cancel";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},

	nav: {
		height: "15vh",
		background: theme.palette.colors.background,
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
		background: theme.palette.colors.background,

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",

		padding: "0px 5% 0px 5%",
	},

	btnContainer: {
		height: "20vh",
		flexWrap: "wrap",
	},

	child: {
		height: "65vh",
		width: "100%",
		background: theme.palette.colors.background,
	},

	childScrollable: {
		width: "100%",
		background: theme.palette.colors.background,
	},

	btn: {
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			height: 40,
		},

		[theme.breakpoints.up("md")]: {
			width: "45%",
			height: "60%",
		},
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
		color: "grey",
		background: theme.palette.colors.secondary,
	},

	btn2: {
		color: "white",
		background: theme.palette.colors.primary,
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

	backBtn: {
		color: theme.palette.colors.mediumPink,
		fontSize: 30,
		cursor: "pointer",
	},
}));

const ExerciseLayout = (props) => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={`${classes.nav}`}>
				<div className={classes.outerNav}>
					<div className={classes.nameContainer}>{props.exerciseName}</div>
					<div className={classes.iconContainer}>
						<CancelIcon className={classes.backBtn} />
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
				<div className={`${classes.btn} ${classes.m10}`}>
					<Button styles={classes.btn1} text="Skip" onClick={props.skip} />
				</div>

				<div className={classes.btn}>
					<Button styles={classes.btn2} text="Check" onClick={props.check} />
				</div>
			</div>
		</div>
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
