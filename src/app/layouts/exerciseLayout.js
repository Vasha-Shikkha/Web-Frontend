import {makeStyles} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

import Timer from "../components/Timer";
import QuestionNumber from "../components/QuestionNumber";
import Button from "../components/Button";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},

	nav: {
		height: "15vh",
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
		minHeight: "65vh",
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
}));

const ExerciseLayout = (props) => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={`${classes.nav} ${classes.container}`}>
				<Timer duration={props.duration} timeout={props.timeout} backToHome={props.backToHome} />
				<QuestionNumber
					totalQuestions={props.totalQuestions}
					currentQuestionNumber={props.currentQuestionNumber}
				/>
			</div>
			<div className={classes.child}>{props.children}</div>
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
	timeout: PropTypes.func.isRequired,
	skip: PropTypes.func.isRequired,
	check: PropTypes.func.isRequired,
	backToHome: PropTypes.func.isRequired,
	duration: PropTypes.number.isRequired,
	totalQuestions: PropTypes.number.isRequired,
	currentQuestionNumber: PropTypes.number.isRequired,
};

export default ExerciseLayout;
