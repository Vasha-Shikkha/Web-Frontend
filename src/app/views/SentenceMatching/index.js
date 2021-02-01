import React, {useEffect, useState, useRef} from "react";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import SentenceMatchingCard from "../../components/ExerciseCard/SentenceMatchingCard";
import VerdictBanner from "../../components/VerdictBanner";

import styles from "../../styles/exerciseViewStyles";

const SentenceMatching = () => {
	const classes = styles();
	const [question, setQuestion] = useState([]);
	const [moveAway, setMoveAway] = useState([]);
	const [checked, setChecked] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [loading, setLoading] = useState(true);
	const [showVerdict, setShowVerdict] = useState(false);
	const [correct, setCorrect] = useState(true);

	const childRef = useRef();

	useEffect(() => {
		let data = [
			{
				sentences: [
					{
						part_one: "the cat",
						part_two: "is sleeping",
					},

					{
						part_one: "the cow are",
						part_two: "eating grass",
					},

					{
						part_one: "She likes to",
						part_two: "eat apple",
					},

					{
						part_one: "The dog",
						part_two: "is wagging its tail",
					},

					{
						part_one: "It is raining",
						part_two: "since morning",
					},

					{
						part_one: "The bus has",
						part_two: "manual gear",
					},
				],

				user_answer: [],
			},

			{
				sentences: [
					{
						part_one: "The dog",
						part_two: "is wagging its tail",
					},

					{
						part_one: "It is raining",
						part_two: "since morning",
					},

					{
						part_one: "The bus has",
						part_two: "manual gear",
					},
				],

				user_answer: [],
			},
		];

		setMoveAway(data.map(() => false));
		setChecked(data.map(() => false));
		setQuestion(data);
		setLoading(false);
	}, []);

	const backToHome = () => {
		console.log("time to get back kid");
	};

	const skip = () => {
		check();
	};

	const check = () => {
		let answer = childRef.current.check();

		// save the answer
		// let tempQuestion = [...question];
		// tempQuestion[currentQuestion].users_answer = [...answer.users_answer];
		// setQuestion(tempQuestion);

		// // mark this question as checked
		// let arr = [...checked];
		// arr[currentQuestion] = true;
		// setChecked(arr);

		// // show verdict
		// setShowVerdict(true);
		setCorrect(answer.isCorrect);
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
		} else {
			setCurrentQuestion(currentQuestion + 1);
		}
	};

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<ExerciseLayout
					exerciseName="Sentence Matching"
					totalQuestions={question.length}
					currentQuestionNumber={currentQuestion + 1}
					backToHome={backToHome}
					skip={skip}
					check={check}>
					<div className={`${classes.root} ${classes.centered}`}>
						{question.map((obj, idx) => (
							<SentenceMatchingCard
								key={idx}
								ref={childRef}
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

export default SentenceMatching;
