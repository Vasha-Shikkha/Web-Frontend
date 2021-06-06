import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

import ErrorSound from "../../assets/sounds/error.mp3";
import SuccessSound from "../../assets/sounds/success.mp3";
import Button from "../Button";
import "../../styles/verdictBanner.css";

const VerdictBanner = (props) => {
	const classes = styles();
	return (
		<>
			{/* {props.anime && (
				<audio controls={false} autoPlay>
					<source src={props.correct ? SuccessSound : ErrorSound} type="audio/mpeg" />
				</audio>
			)} */}
			<div
				className={`${classes.root} ${props.correct ? classes.correct : classes.incorrect} ${
					props.anime ? classes.anime : null
				}`}>
				<div className={classes.left}>
					{props.anime ? (
						props.correct ? (
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 130.2 130.2"
								width="50"
								height="50">
								<circle
									className="path_verdict circle_verdict"
									fill="none"
									stroke="#73AF55"
									strokeWidth="6"
									strokeMiterlimit="10"
									cx="65.1"
									cy="65.1"
									r="62.1"
								/>
								<polyline
									className="path_verdict check_verdict"
									fill="none"
									stroke="#73AF55"
									strokeWidth="6"
									strokeLinecap="round"
									strokeMiterlimit="10"
									points="100.2,40.2 51.5,88.8 29.8,67.5 "
								/>
							</svg>
						) : (
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 130.2 130.2"
								width="50"
								height="50">
								<circle
									className="path_verdict circle_verdict"
									fill="none"
									stroke="#D06079"
									strokeWidth="6"
									strokeMiterlimit="10"
									cx="65.1"
									cy="65.1"
									r="62.1"
								/>
								<line
									className="path_verdict line_verdict"
									fill="none"
									stroke="#D06079"
									strokeWidth="6"
									strokeLinecap="round"
									strokeMiterlimit="10"
									x1="34.4"
									y1="37.9"
									x2="95.8"
									y2="92.3"
								/>
								<line
									className="path_verdict line_verdict"
									fill="none"
									stroke="#D06079"
									strokeWidth="6"
									strokeLinecap="round"
									strokeMiterlimit="10"
									x1="95.8"
									y1="38"
									x2="34.4"
									y2="92.2"
								/>
							</svg>
						)
					) : null}

					<div className={classes.left_text}>{props.correct ? "Correct" : "Incorrect"}</div>
				</div>

				<div className={classes.right}>
					{!props.correct && (
						<div className={classes.btnWrapper} style={{marginRight: 15}}>
							<Button text="Try Again" onClick={props.tryAgain} styles={classes.try_again_btn} />
						</div>
					)}

					{!props.correct && (
						<div className={classes.btnWrapper} style={{marginRight: 15}}>
							<Button
								text="Show Answer"
								onClick={props.showAnswer}
								styles={classes.show_answer_btn}
							/>
						</div>
					)}

					<div className={classes.btnWrapper}>
						<Button
							text="Get Next"
							onClick={props.getNext}
							styles={props.correct ? classes.correct_btn : classes.incorrect_btn}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

VerdictBanner.propTypes = {
	correct: PropTypes.bool.isRequired,
	anime: PropTypes.bool.isRequired,
	getNext: PropTypes.func.isRequired,
	tryAgain: PropTypes.func.isRequired,
	showAnswer: PropTypes.func.isRequired,
};

export default VerdictBanner;
