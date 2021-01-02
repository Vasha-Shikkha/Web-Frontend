import React, {useEffect, useState} from "react";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import MCQCard from "../../components/MCQCard";

import styles from "./styles";

const MCQ = () => {
	const classes = styles();
	const [question, setQuestion] = useState([]);
	const [moveAway, setMoveAway] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [duration, setDuration] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let data = [
			{
				question: "What is the meaning of door?",
				options: ["জানালা", "দরজা", "বাড়ী", "উঠান"],
				answer: [1],
				users_answer: [],
			},

			{
				question: "Which are articles?",
				options: ["a", "of", "an", "the"],
				answer: [0, 2, 3],
				users_answer: [],
			},

			{
				question: "A Tree - which is the correct translation?",
				options: ["একটি গাছ", "একটি বিড়াল", "একটি লোক", "একটি মাছ"],
				answer: [0],
				users_answer: [],
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
		console.log("skipped");
	};

	const check = () => {
		// check the current question
		// change the colors of options
		// show verdict - (correct or incorrect), get-next button will be on the verdict
		let arr = [...moveAway];
		arr[currentQuestion] = true;
		setMoveAway(arr);
		setCurrentQuestion(currentQuestion + 1);
	};

	const getNext = () => {
		// make the showTransition flag true for the current question
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
							<MCQCard key={idx} questionNo={idx} question={obj} moveAway={moveAway[idx]} />
						))}
					</div>
				</ExerciseLayout>
			)}
		</>
	);
};

export default MCQ;
