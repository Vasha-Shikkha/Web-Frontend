import React from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import styles from "./styles";
import correctAnswerGirl from "../../assets/verdictBanner/correctAnswerGirl.png";
import incorrectAnswerGirl from "../../assets/verdictBanner/incorrectAnswerGirl.png";
import correctAnswerBoy from "../../assets/verdictBanner/correctAnswerBoy.png";
import incorrectAnswerBoy from "../../assets/verdictBanner/incorrectAnswerBoy.png";
// import ErrorSound from "../../assets/sounds/error.mp3";
// import SuccessSound from "../../assets/sounds/success.mp3";
import Button from "../Button";
import "../../styles/verdictBanner.css";

const VerdictBanner = (props) => {
	const classes = styles();

	const determineImage = (isCorrect) => {
		let randomNumber = Math.floor(Math.random() * 100);
		if (isCorrect) {
			return randomNumber % 2 ? correctAnswerGirl : correctAnswerBoy;
		} else {
			return randomNumber % 2 ? incorrectAnswerGirl : incorrectAnswerBoy;
		}
	};

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
				<Grid container spacing={1} alignContent="center" alignItems="center">
					<Grid id="left" item xs={12} sm={12} md={4} lg={4} xl={4}>
						{props.anime ? (
							<Grid
								container
								spacing={1}
								justify="space-between"
								alignContent="center"
								alignItems="center">
								<Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
									<div className={classes.svgContainer}>
										{props.correct ? (
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
										)}
										<div className={classes.left_text}>
											{props.correct ? "Correct" : "Incorrect"}
										</div>
									</div>
								</Grid>
								<Grid item xs={6} sm={6} md={8} lg={8} xl={8}>
									<div className={classes.imgContainer}>
										<img
											src={determineImage(props.correct)}
											alt=""
											className={classes.verdictImage}
										/>
									</div>
								</Grid>
							</Grid>
						) : null}
					</Grid>
					<Grid id="right" item xs={12} sm={12} md={8} lg={8} xl={8}>
						<Grid container spacing={1} justify="space-between">
							<Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
								{!props.correct && (
									<div className={classes.btnWrapper}>
										<Button
											text="Try Again"
											onClick={props.tryAgain}
											styles={classes.try_again_btn}
										/>
									</div>
								)}
							</Grid>

							<Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
								{!props.correct && (
									<div className={classes.btnWrapper}>
										<Button
											text="Show Answer"
											onClick={props.showAnswer}
											styles={classes.show_answer_btn}
										/>
									</div>
								)}
							</Grid>

							<Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
								<div className={classes.btnWrapper}>
									<Button
										text="Get Next"
										onClick={props.getNext}
										styles={props.correct ? classes.correct_btn : classes.incorrect_btn}
									/>
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
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
