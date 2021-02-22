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
						left_part: "Village life represents a lifestyle",
						right_part: "which is rural",
					},

					{
						left_part: "City life represents a lifestyle",
						right_part: "which is urban",
					},

					{
						left_part: "There are trees everywhere in the village",
						right_part: "but there are very few trees in cities",
					},

					{
						left_part: "Moreover, the environment in village",
						right_part: "is very calm",
					},
				],

				user_answer: [],
			},

			{
				sentences: [
					{
						left_part: "On the other hand the city life",
						right_part: "is very loud and crowded",
					},

					{
						left_part: "Educated people like cities",
						right_part: "because there are lots of technology",
					},

					{
						left_part: "But a village is not fully modern",
						right_part: "due to lack of science",
					},

					{
						left_part: "Obviously village life is",
						right_part: "more natural",
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
		let tempQuestion = [...question];
		tempQuestion[currentQuestion].users_answer = [...answer.users_answer];
		setQuestion(tempQuestion);

		// mark this question as checked
		let arr = [...checked];
		arr[currentQuestion] = true;
		setChecked(arr);

		// show verdict
		setShowVerdict(true);
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
						<SentenceMatchingCard
							ref={childRef}
							currentQuestionNumber={currentQuestion}
							question={question[currentQuestion]}
							isReview={false}
							isChecked={checked[currentQuestion]}
						/>
						<VerdictBanner correct={correct} anime={showVerdict} getNext={getNext} />
					</div>
				</ExerciseLayout>
			)}
		</>
	);
};

export default SentenceMatching;
