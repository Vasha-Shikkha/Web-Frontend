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

	const timeout = () => {
		console.log("timeover kid!!");
	};

	const backToHome = () => {
		console.log("time to get back kid");
	};

	const skip = () => {
		console.log("skipped");
	};

	const getNext = () => {
		console.log("next");
	};

	return (
		<div className={classes.root}>
			<div className={`${classes.nav} ${classes.container}`}>
				<Timer duration={10} timeout={timeout} backToHome={backToHome} />
				<QuestionNumber totalQuestions={3} currentQuestionNumber={1} />
			</div>
			<div className={classes.child}>{props.children}</div>
			<div className={`${classes.btnContainer} ${classes.container}`}>
				<div className={classes.btn}>
					<Button styles={classes.btn1} text="Skip" onClick={skip} />
				</div>

				<div className={classes.btn}>
					<Button styles={classes.btn2} text="Get Next" onClick={getNext} />
				</div>
			</div>
		</div>
	);
};

ExerciseLayout.propTypes = {
	children: PropTypes.object.isRequired,
};

export default ExerciseLayout;
