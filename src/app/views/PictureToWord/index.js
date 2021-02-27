import React, {useEffect, useState, useRef} from "react";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import PictureToWordCard from "../../components/ExerciseCard/PictureToWordCard";

import styles from "../../styles/exerciseViewStyles";

const PictureToWord = () => {
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
				question: "Select the word that best matches the picture",
				questionImage:
					"https://raw.githubusercontent.com/Waqar-107/temp/5680d5fc30fb05aff4251f5e9dc3f8c371df674f/vashaShikkha/pic_to_word/doc.svg",
				options: ["nurse", "teacher", "doctor", "police", "actor"],
				answer: 2,
				users_answer: -1,
			},

			{
				question: "Can you select appropriate adjective for the expression from the box below?",
				questionImage:
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/pic_to_word/unnamed.jpg",
				options: ["sleepy", "happy", "confused", "angry"],
				answer: 3,
				users_answer: -1,
			},

			{
				question: "Can you select appropriate adjective for the expression from the box below?",
				questionImage:
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/pic_to_word/unnamed (1).jpg",
				options: ["angry", "confused", "excited", "sad"],
				answer: 1,
				users_answer: -1,
			},

			{
				question: "Can you select appropriate adjective for the expression from the box below?",
				questionImage:
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/pic_to_word/unnamed (2).jpg",
				options: ["cheerful", "confused", "afraid", "sleepy"],
				answer: 2,
				users_answer: -1,
			},

			{
				question: "Can you select appropriate adjective for the expression from the box below?",
				questionImage:
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/pic_to_word/unnamed (3).jpg",
				options: ["sleepy", "depressed", "confused", "angry"],
				answer: 0,
				users_answer: -1,
			},

			{
				question: "Can you select appropriate adjective for the expression from the box below?",
				questionImage:
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/pic_to_word/unnamed (4).jpg",
				options: ["sleepy", "gloomy", "confused", "angry"],
				answer: 1,
				users_answer: -1,
			},

			{
				question: "Can you select appropriate adjective for the expression from the box below?",
				questionImage:
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/pic_to_word/unnamed (5).jpg",
				options: ["sleepy", "cheerful", "sad", "annoyed"],
				answer: 1,
				users_answer: -1,
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
					exerciseName="Picture to Word"
					totalQuestions={question.length}
					currentQuestionNumber={currentQuestion + 1}
					backToHome={backToHome}
					skip={skip}
					check={check}
					correct={correct}
					anime={showVerdict}
					getNext={getNext}>
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
					</div>
				</ExerciseLayout>
			)}
		</>
	);
};

export default PictureToWord;
