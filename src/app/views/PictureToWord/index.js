import React, {useEffect, useState, useRef} from "react";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import PictureToWordCard from "../../components/ExerciseCard/PictureToWordCard";
import VerdictBanner from "../../components/VerdictBanner";

import styles from "../../styles/exerciseViewStyles";

const PictureToWord = () => {
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
				question: "What is this?",
				questionImage:
					"https://raw.githubusercontent.com/Waqar-107/temp/620ffac0e260b6e0e1f6f08d0a86a38ad93e0547/word2Pic/hen.svg",
				options: ["hen", "fish", "tree", "horse"],
				answer: 0,
				users_answer: -1,
			},

			{
				questionImage: "https://raw.githubusercontent.com/Waqar-107/temp/master/word2Pic/tree.png",
				options: ["hen", "fish", "tree", "horse"],
				answer: 2,
				users_answer: -1,
			},

			{
				questionImage:
					"https://raw.githubusercontent.com/Waqar-107/temp/620ffac0e260b6e0e1f6f08d0a86a38ad93e0547/word2Pic/fish.svg",
				options: ["goat", "fish", "tree", "elephant"],
				answer: 1,
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
							<PictureToWordCard
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

export default PictureToWord;
