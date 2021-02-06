import React, {useEffect, useState, useRef} from "react";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import JumbledSentenceCard from "../../components/ExerciseCard/JumbledSentenceCard";
import VerdictBanner from "../../components/VerdictBanner";

import styles from "../../styles/exerciseViewStyles";

const JumbledSentence = () => {
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
				context:
					"Priyoti has never seen hills before. So, her father decides to go on a vacation to -",
				chunks: ["T", "G", "O", "C", "T", "H", "I", "G", "A", "N"],
				answer: "CHITTAGONG",
			},

			{
				context:
					"Bangladesh is famous for tea-gardening. Anyone who wants to see tea-garden can go to –",
				chunks: ["T", "S", "H", "L", "Y", "E"],
				answer: "SYLHET",
			},

			{
				context: "If you want to see the most beautiful sea-beach, you must go to-",
				chunks: ["O", "B", "C", "Z", "R", "X", "A", "A", "S"],
				answer: "COXSBAZAR",
			},

			{
				context: "A person who captures a criminal is known as –",
				chunks: ["E", "I", "P", "C", "L", "O"],
				answer: "POLICE",
			},

			{
				context: "Bangladesh is an agricultural country. Those who grows crops are known as-",
				chunks: ["S", "E", "R", "F", "M", "A", "R"],
				answer: "FARMERS",
			},

			{
				context: "Ratul gives homework and assignments to children in an institution. He works in-",
				chunks: ["C", "O", "L", "S", "O", "H"],
				answer: "SCHOOL",
			},

			{
				context: "We need vitamins and minerals to stay healthy. So we should eat a lot of- ",
				chunks: ["E", "T", "B", "G", "A", "V", "S", "E", "L", "E"],
				answer: "VEGETABLES",
			},

			{
				chunks: ["completed her ", "She ", " to sleep", "homework ", "before going"],
				answer: "She completed her homework before going to sleep",
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
					exerciseName="Jumbled Word/Sentence"
					scrollable={true}
					totalQuestions={question.length}
					currentQuestionNumber={currentQuestion + 1}
					backToHome={backToHome}
					skip={skip}
					check={check}>
					<div className={`${classes.root} ${classes.centered}`}>
						{question.map((obj, idx) => (
							<JumbledSentenceCard
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

export default JumbledSentence;
