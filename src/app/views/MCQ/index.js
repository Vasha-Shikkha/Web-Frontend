import React, {useEffect, useState} from "react";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import MCQCard from "../../components/MCQCard";

import styles from "./styles";

const MCQ = () => {
	const classes = styles();
	const [question, setQuestion] = useState([]);
	const [moveAway, setMoveAway] = useState([]);
	const [checked, setChecked] = useState([]);
	const [colors, setColors] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [duration, setDuration] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let data = [
			{
				question: "What is the meaning of door?",
				options: ["জানালা", "দরজা", "বাড়ী", "উঠান"],
				answer: [1],
				users_answer: new Set(),
			},

			{
				question: "Which are articles?",
				options: ["a", "of", "an", "the"],
				answer: [0, 2, 3],
				users_answer: new Set(),
			},

			{
				question: "A Tree - which is the correct translation?",
				options: ["একটি গাছ", "একটি বিড়াল", "একটি লোক", "একটি মাছ"],
				answer: [0],
				users_answer: new Set(),
			},
		];

		setMoveAway(data.map(() => false));
		setChecked(data.map(() => false));
		if (data.length) setColors(data[0].options.map(() => "white"));
		setDuration(60 * data.length);
		setQuestion(data);
		setLoading(false);
	}, []);

	const selectOption = (idx) => {
		if (question[currentQuestion].users_answer.has(idx))
			question[currentQuestion].users_answer.delete(idx);
		else question[currentQuestion].users_answer.add(idx);
	};

	const timeout = () => {
		console.log("timeover kid!!");
	};

	const backToHome = () => {
		console.log("time to get back kid");
	};

	const skip = () => {
		check();
	};

	// check the current question
	// change the colors of options
	// show verdict - (correct or incorrect), get-next button will be on the verdict
	const check = () => {
		// mark those that the user selected red at first
		let temp_colors = [...colors];
		for (let item of question[currentQuestion].users_answer) {
			temp_colors[item] = "#fac1c1";
		}

		for (let i = 0; i < question[currentQuestion].answer.length; i++) {
			// if marked red, that means the user attempted it, so it is correct
			// if it white then the user missed this option so make it incorrect
			if (temp_colors[question[currentQuestion].answer[i]] === "white") temp_colors[i] = "#fac1c1";
			else temp_colors[question[currentQuestion].answer[i]] = "#b6eb8a";
		}

		setColors(temp_colors);

		// mark the question as checked so that the user can't click on the options
		let arr = [...checked];
		arr[currentQuestion] = true;
		setChecked(arr);
	};

	const getNext = () => {
		// make the showTransition flag true for the current question
		let arr = [...moveAway];
		arr[currentQuestion] = true;
		setMoveAway(arr);

		// gameover
		if (currentQuestion === question.length) {
		} else {
			setColors(question[currentQuestion + 1].options.map(() => "white"));
			setCurrentQuestion(currentQuestion + 1);
		}
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
							<MCQCard
								key={idx}
								elevation={question.length - idx + 1}
								question={obj}
								moveAway={moveAway[idx]}
								selectOption={selectOption}
								isReview={false}
								isChecked={checked[idx]}
								colors={colors}
							/>
						))}
					</div>
				</ExerciseLayout>
			)}
		</>
	);
};

export default MCQ;
