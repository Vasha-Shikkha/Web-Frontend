import React, {useEffect, useState, useRef} from "react";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import WordToPictureCard from "../../components/ExerciseCard/WordToPictureCard";
import VerdictBanner from "../../components/VerdictBanner";

import styles from "../../styles/exerciseViewStyles";

const WordToPicture = () => {
	const classes = styles();
	const [question, setQuestion] = useState([]);
	const [moveAway, setMoveAway] = useState([]);
	const [checked, setChecked] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [duration, setDuration] = useState(0);
	const [loading, setLoading] = useState(true);
	const [showVerdict, setShowVerdict] = useState(false);
	const [correct, setCorrect] = useState(true);

	const childRef = useRef();

	useEffect(() => {
		let data = [
			{
				question: "Which is a Tiger?",
				options: [
					"https://raw.githubusercontent.com/Waqar-107/temp/620ffac0e260b6e0e1f6f08d0a86a38ad93e0547/word2Pic/hen.svg",
					"https://raw.githubusercontent.com/Waqar-107/temp/620ffac0e260b6e0e1f6f08d0a86a38ad93e0547/word2Pic/elephant.svg",
					"https://raw.githubusercontent.com/Waqar-107/temp/620ffac0e260b6e0e1f6f08d0a86a38ad93e0547/word2Pic/tiger.svg",
					"https://raw.githubusercontent.com/Waqar-107/temp/620ffac0e260b6e0e1f6f08d0a86a38ad93e0547/word2Pic/horse.svg",
				],
				answer: 2,
				users_answer: -1,
			},

			{
				question: "Which is a fish?",
				options: [
					"https://raw.githubusercontent.com/Waqar-107/temp/620ffac0e260b6e0e1f6f08d0a86a38ad93e0547/word2Pic/fish.svg",
					"https://raw.githubusercontent.com/Waqar-107/temp/620ffac0e260b6e0e1f6f08d0a86a38ad93e0547/word2Pic/hen.svg",
					"https://raw.githubusercontent.com/Waqar-107/temp/620ffac0e260b6e0e1f6f08d0a86a38ad93e0547/word2Pic/tiger.svg",
					"https://raw.githubusercontent.com/Waqar-107/temp/620ffac0e260b6e0e1f6f08d0a86a38ad93e0547/word2Pic/horse.svg",
				],
				answer: 0,
				users_answer: -1,
			},

			{
				question: "Which is a tree?",
				options: [
					"https://raw.githubusercontent.com/Waqar-107/temp/620ffac0e260b6e0e1f6f08d0a86a38ad93e0547/word2Pic/fish.svg",
					"https://raw.githubusercontent.com/Waqar-107/temp/620ffac0e260b6e0e1f6f08d0a86a38ad93e0547/word2Pic/apple.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/620ffac0e260b6e0e1f6f08d0a86a38ad93e0547/word2Pic/tiger.svg",
					"https://raw.githubusercontent.com/Waqar-107/temp/620ffac0e260b6e0e1f6f08d0a86a38ad93e0547/word2Pic/tree.png",
				],
				answer: 3,
				users_answer: -1,
			},
		];

		setMoveAway(data.map(() => false));
		setChecked(data.map(() => false));
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
					duration={duration}
					totalQuestions={question.length}
					currentQuestionNumber={currentQuestion + 1}
					timeout={timeout}
					backToHome={backToHome}
					skip={skip}
					check={check}>
					<div className={`${classes.root} ${classes.centered}`}>
						{question.map((obj, idx) => (
							<WordToPictureCard
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

export default WordToPicture;
