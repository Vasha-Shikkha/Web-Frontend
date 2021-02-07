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
						part_one: "Village life represents a lifestyle",
						part_two: "which is rural",
					},

					{
						part_one: "City life represents a lifestyle",
						part_two: "which is urban",
					},

					{
						part_one: "There are trees everywhere in the village",
						part_two: "but there are very few trees in cities",
					},

					{
						part_one: "Moreover, the environment in village",
						part_two: "is very calm",
					},
				],

				user_answer: [],
			},

			{
				sentences: [
					{
						part_one: "On the other hand the city life",
						part_two: "is very loud and crowded",
					},

					{
						part_one: "Educated people like cities",
						part_two: "because there are lots of technology",
					},

					{
						part_one: "But a village is not fully modern",
						part_two: "due to lack of science",
					},

					{
						part_one: "Obviously village life is",
						part_two: "more natural",
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
					scrollable={true}
					totalQuestions={question.length}
					currentQuestionNumber={currentQuestion + 1}
					backToHome={backToHome}
					skip={skip}
					check={check}>
					<div className={`${classes.scrollableRoot} ${classes.centered}`}>
						{question.map((obj, idx) => (
							<SentenceMatchingCard
								key={idx}
								ref={childRef}
								thisQuestionNumber={idx}
								currentQuestionNumber={currentQuestion}
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
