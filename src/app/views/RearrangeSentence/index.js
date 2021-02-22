import React, {useEffect, useState, useRef} from "react";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import RearrangeSentenceCard from "../../components/ExerciseCard/RearrangeSentenceCard";
import VerdictBanner from "../../components/VerdictBanner";
import styles from "../../styles/exerciseViewStyles";
import {Redirect} from "react-router-dom";

const RearrangeSentence = () => {
	const classes = styles();
	const [question, setQuestion] = useState([]);
	const [checked, setChecked] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [loading, setLoading] = useState(true);
	const [showVerdict, setShowVerdict] = useState(false);
	const [correct, setCorrect] = useState(true);
	const [redirect, setRedirect] = useState(null);

	const childRef = useRef();

	useEffect(() => {
		let data = [
			{
				context:
					"Shwapnil is new in the class. During tiffin break, all the students are planning to play hide-and-seek. But Shwapnil has never played hide-and-seek before. So Maruf explains to him how to play the game. Can you rearrange all the steps of the game that Maruf says?",
				contextImage:
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/hide_n_seek.jpg",
				sentences: [
					"At first, we toss and find the seeker who seeks and finds the others.",
					"The others are the hiders who will hide.",
					"Once the seeker is chosen, he will close his eyes and count loudly from 1 to 10.",
					"And while the seeker counts, the hiders will all in different places.",
					"After the counting is done, the seeker will yell- “Ready or not, here I come!”",
					"And then he will search for all the hiders and find all of them.",
					"In the end, the first hider found will lose and become the next seeker.",
				],
			},
		];

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
		tempQuestion[currentQuestion].users_answer = answer.users_answer;
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
		// hide verdict
		setShowVerdict(false);

		// gameover
		if (currentQuestion + 1 === question.length) {
			setRedirect("/finish");
		} else {
			setCurrentQuestion(currentQuestion + 1);
		}
	};

	if (redirect) return <Redirect to="/finish" />;

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<ExerciseLayout
					exerciseName="Re-arrange Sentence"
					scrollable={true}
					totalQuestions={question.length}
					currentQuestionNumber={currentQuestion + 1}
					backToHome={backToHome}
					skip={skip}
					check={check}>
					<div className={`${classes.scrollableRoot} ${classes.centered}`}>
						<RearrangeSentenceCard
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

export default RearrangeSentence;
