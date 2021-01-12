import React, {useEffect, useState, forwardRef, useRef, useImperativeHandle} from "react";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import TrueFalseCard from "../../components/TrueFalseCard";
import VerdictBanner from "../../components/VerdictBanner";

import styles from "./styles";

const TrueFalse = () => {
	const classes = styles();
	const [question, setQuestion] = useState([]);
	const [moveAway, setMoveAway] = useState([]);
	const [checked, setChecked] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [duration, setDuration] = useState(0);
	const [loading, setLoading] = useState(true);
	const [showVerdict, setShowVerdict] = useState(false);
	const [correct, setCorrect] = useState(true);

	useEffect(() => {
		let data = [
			{
				question: "'A' is an article",
				answer: 1,
				users_answer: -1,
			},

			{
				question: "'with' is a conjunction",
				options: 0,
				users_answer: -1,
			},

			{
				question: "'the' is not an article",
				options: 0,
				users_answer: -1,
			},
		];

		setMoveAway(data.map(() => false));
		setDuration(60 * data.length);
		setQuestion(data);
		setLoading(false);
	}, []);

	const timeout = () => {
		console.log("timeover kid!!");
	};

	const backToHome = () => {
		console.log("time to get back kid");
	};

	const skip = () => {
		check();
	};

	const check = () => {
		// mark the question as checked so that the user can't click on the options
		let arr = [...checked];
		arr[currentQuestion] = true;
		setChecked(arr);
		setShowVerdict(true);
		//setCorrect(!incorrect);
	};

	const getNext = () => {
		// make the showTransition flag true for the current question
		let arr = [...moveAway];
		arr[currentQuestion] = true;
		setMoveAway(arr);

		// hide verdict
		setShowVerdict(false);

		// gameover
		if (currentQuestion + 1 === question.length) {
		} else setCurrentQuestion(currentQuestion + 1);
	};

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<ExerciseLayout
					duration={duration}
					totalQuestions={question.length}
					currentQuestionNumber={currentQuestion + 1}
					timeout={timeout}
					backToHome={backToHome}
					skip={skip}
					check={check}>
					<div className={`${classes.root} ${classes.centered}`}>
						{question.map((obj, idx) => (
							<TrueFalseCard
								key={idx}
								elevation={question.length - idx + 1}
								question={obj}
								moveAway={moveAway[idx]}
								isReview={false}
								isChecked={checked[idx]}
							/>
						))}
						<VerdictBanner correct={correct} anime={showVerdict} getNext={getNext} />
					</div>
				</ExerciseLayout>
			)}
		</>
	);
};

export default TrueFalse;
