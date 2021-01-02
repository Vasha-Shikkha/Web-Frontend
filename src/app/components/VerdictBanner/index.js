// <!--[if lte IE 9]>
// <style>
//   .path {stroke-dasharray: 0 !important;}
// </style>
// <![endif]-->

// <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
// <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
// <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
// </svg>
// <p class="success">Oh Yeah!</p>

// <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
// <circle class="path circle" fill="none" stroke="#D06079" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
// <line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
// <line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
// </svg>
// <p class="error">Bummer!</p>
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

import ErrorSound from "../../assets/sounds/error.mp3";
import SuccessSound from "../../assets/sounds/success.mp3";
import Button from "../Button";
//import "../../styles/verdictBanner.css";

const VerdictBanner = (props) => {
	const classes = styles();
	return (
		<>
			{props.anime && (
				<audio controls={false} autoPlay>
					<source src={props.correct ? SuccessSound : ErrorSound} type="audio/mpeg" />
				</audio>
			)}
			<div
				className={`${classes.root} ${props.correct ? classes.correct : classes.incorrect} ${
					props.anime ? classes.anime : null
				}`}>
				<div className={classes.left}>{props.correct ? "Correct" : "Incorrect"}</div>
				<div className={classes.right}>
					<Button
						text="Get Next"
						onClick={props.getNext}
						styles={props.correct ? classes.correct_btn : classes.incorrect_btn}
					/>
				</div>
			</div>
		</>
	);
};

VerdictBanner.propTypes = {
	correct: PropTypes.bool.isRequired,
	anime: PropTypes.bool.isRequired,
	getNext: PropTypes.func.isRequired,
};

export default VerdictBanner;
