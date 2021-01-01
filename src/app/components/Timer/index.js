import React, {useState, useEffect} from "react";
import styles from "./styles";
import PropTypes from "prop-types";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Timer = (props) => {
	const classes = styles();
	const [timeRemaining, setTimeRemaing] = useState(props.duration);

	useEffect(() => {
		let interval = setInterval(() => {
			if (timeRemaining > 0) setTimeRemaing(timeRemaining - 1);
			else {
				clearInterval(interval);
				props.timeout();
			}
		}, 1000);

		return () => clearInterval(interval);
	});

	const timeFormat = () => {
		let minutes = Math.floor(timeRemaining / 60);
		let seconds = timeRemaining % 60;

		let ret = "";

		if (minutes < 10) ret = "0";
		ret += minutes.toString(10) + ":";

		if (seconds < 10) ret += "0";
		ret += seconds.toString(10);

		return ret;
	};

	return (
		<div className={classes.root}>
			<ArrowBackIosIcon className={classes.backBtn} onClick={() => props.backToHome()} />
			<div className={classes.rem}>Remaining</div>
			<div className={classes.time}>{timeFormat()}</div>
		</div>
	);
};

Timer.propTypes = {
	duration: PropTypes.number.isRequired,
	timeout: PropTypes.func.isRequired,
	backToHome: PropTypes.func.isRequired,
};

export default Timer;
