import React, {useEffect, useState} from "react";
import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";

import styles from "./styles";

const MCQ = (props) => {
	const classes = styles();
	const [question, setQuestion] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(1);
	const [duration, setDuration] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let data = [
			{
				question: "",
				options: ["", "", "", ""],
				answer: 0,
			},

			{
				question: "",
				options: ["", "", "", ""],
				answer: 0,
			},

			{
				question: "",
				options: ["", "", "", ""],
				answer: 0,
			},
		];

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
		console.log("skipped");
	};

	const getNext = () => {
		console.log("next");
	};

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<ExerciseLayout
					duration={duration}
					totalQuestions={question.length}
					currentQuestionNumber={currentQuestion}
					timeout={timeout}
					backToHome={backToHome}
					skip={skip}
					getNext={getNext}>
					<div></div>
				</ExerciseLayout>
			)}
		</>
	);
};

export default MCQ;
