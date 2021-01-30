import React, {useEffect, useState, useRef} from "react";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import FillInTheBlanksCard from "../../components/ExerciseCard/FillInTheBlanksCard";
import VerdictBanner from "../../components/VerdictBanner";

import styles from "../../styles/exerciseViewStyles";

const FillInTheBlanks = () => {
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
				context:
					"Reza and Rony are classmates. They suddenly meet on the street and have a conversation about their interests in games. Can you help them complete their chat with the group of words from the box?",
				question:
					"Reza: Hi Rony! What’s in your hand? _  showing it to me?\n\
        Rony: Hey! Yes sure. This is a book on chess techniques. \n\
        Reza: Are you (b) ____________ chess? I find it difficult to be honest.\n\
        Rony: I am crazy about chess. (c) ________________ game?\n\
        Reza: Well,(d) _____________ cricket to any other sports.\n\
        Rony: That’s great! Then we can (e) _____________ when we’re free.\n\
        Reza: Sure, (f) _________________ about it. Let’s meet some time soon.",
				options: [
					"What’s your favorite",
					"I prefer",
					"share our views",
					"interested in",
					"I’m really excited",
					"would you mind",
				],
				answer: [
					"would you mind",
					"interested in",
					"What’s your favorite",
					"share our views",
					"I prefer",
					"I’m really excited",
				],
				users_answer: [],
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
					duration={duration}
					totalQuestions={question.length}
					currentQuestionNumber={currentQuestion + 1}
					timeout={timeout}
					backToHome={backToHome}
					skip={skip}
					check={check}>
					<div className={`${classes.root} ${classes.centered}`}>
						{question.map((obj, idx) => (
							<FillInTheBlanksCard
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

export default FillInTheBlanks;
