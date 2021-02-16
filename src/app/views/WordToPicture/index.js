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
	const [loading, setLoading] = useState(true);
	const [showVerdict, setShowVerdict] = useState(false);
	const [correct, setCorrect] = useState(true);

	const childRef = useRef();

	useEffect(() => {
		let data = [
			{
				question: "Find out the Saint Martin’s island from the following pictures:",
				options: [
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image14.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image2.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image12.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image3.jpg",
				],
				answer: 2,
				users_answer: -1,
			},

			{
				question: "Find out the 60 Gambuj Mosque from the following pictures:",
				options: [
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image1.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image15.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image9.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image4.jpg",
				],
				answer: 0,
				users_answer: -1,
			},

			{
				question: "Find out the National Memorial of Bangladesh from the following pictures:",
				options: [
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image10.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image16.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image21.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image24.jpg",
				],
				answer: 2,
				users_answer: -1,
			},

			{
				question: "Find out the national flower of Bangladesh:",
				options: [
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image6.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image7.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image22.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image5.jpg",
				],
				answer: 3,
				users_answer: -1,
			},

			{
				question: "Find out the national fruit of Bangladesh:",
				options: [
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image20.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image18.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image19.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image23.jpg",
				],
				answer: 1,
				users_answer: -1,
			},

			{
				question: "Find out the national poet of Bangladesh:",
				options: [
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image17.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image8.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image11.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/word_to_pic/image13.jpg",
				],
				answer: 0,
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
					exerciseName="Word to Picture"
					totalQuestions={question.length}
					currentQuestionNumber={currentQuestion + 1}
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
