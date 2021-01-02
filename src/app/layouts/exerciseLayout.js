import {makeStyles} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

import Timer from "../components/Timer";
import QuestionNumber from "../components/QuestionNumber";
import Button from "../components/Button";

const styles = makeStyles((theme) => ({
	root: {
		height: "100vh",
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
		height: "15vh",
	},

	child: {
		height: "70vh",
		width: "100%",
		overflowY: "auto",
	},

	btn: {
		width: "45%",
		height: "60%",
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
				<div className={classes.btn}>
					<Button styles={classes.btn1} text="Skip" onClick={props.skip} />
				</div>

				<div className={classes.btn}>
					<Button styles={classes.btn2} text="Get Next" onClick={props.getNext} />
				</div>
			</div>
		</div>
	);
};

ExerciseLayout.propTypes = {
	children: PropTypes.object.isRequired,
	timeout: PropTypes.func.isRequired,
	skip: PropTypes.func.isRequired,
	getNext: PropTypes.func.isRequired,
	backToHome: PropTypes.func.isRequired,
	duration: PropTypes.number.isRequired,
	totalQuestions: PropTypes.number.isRequired,
	currentQuestionNumber: PropTypes.number.isRequired,
};

export default ExerciseLayout;
