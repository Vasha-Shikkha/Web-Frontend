import React, {useEffect, useState, useRef} from "react";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import FillInTheBlanksCard from "../../components/ExerciseCard/FillInTheBlanksCard";
import VerdictBanner from "../../components/VerdictBanner";

import styles from "../../styles/exerciseViewStyles";
import {Redirect} from "react-router-dom";

const FillInTheBlanks = () => {
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
					"Reza and Rony are classmates. They suddenly meet on the street and have a conversation about their interests in games. Can you help them complete their chat with the group of words from the box?",
				question:
					"Reza: Hi Rony! What’s in your hand? _  showing it to me?\n Rony: Hey! Yes sure. This is a book on chess techniques\n Reza: Are you _ chess? I find it difficult to be honest\n Rony: I am crazy about chess. _ game?\n Reza: Well, _ cricket to any other sports.\n Rony: That’s great! Then we can _ when we’re free.\n Reza: Sure, _ about it. Let’s meet some time soon.",
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
					"I prefer",
					"share our views",
					"I’m really excited",
				],
				users_answer: [],
			},

			{
				context: "Fill in the blanks with suitable word from the box:",
				question:
					"Bangladesh has an enriched culture of varieties of foods. Different types of _  add different _ to Bangladeshi cuisine. A person who does not eat fish and meat is called a _. But most of the Bangladeshis are _. In fact, it is said “fish and rice make one Bangali.” Usually most of the people here take three main _ a day- breakfast, lunch and dinner. They also like _ of vegetables with their meals. Moreover, they love taking snacks in between the main meals depending on their _. Bangladeshis also like _ foods as it makes the _ more appealing. Overall, they are very enthusiastic about trying out different foods and making _ in their cooking.",
				options: [
					"salads",
					"fusion",
					"flavours",
					"appetite",
					"non-vegetarians",
					"meals",
					"vegetarian",
					"garnishing",
					"cuisine",
					"spices",
				],
				answer: [
					"spices",
					"flavours",
					"vegetarian",
					"non-vegetarians",
					"meals",
					"salads",
					"appetite",
					"garnishing",
					"cuisine",
					"fusion",
				],
				users_answer: [],
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
		// hide verdict
		setShowVerdict(false);

		// gameover
		if (currentQuestion + 1 === question.length) {
			setRedirect("/finish");
		} else {
			setCurrentQuestion(currentQuestion + 1);
		}
	};

	if (redirect) return <Redirect to={redirect} />;

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<ExerciseLayout
					exerciseName="Fill in The Blanks"
					scrollable={true}
					totalQuestions={question.length}
					currentQuestionNumber={currentQuestion + 1}
					backToHome={backToHome}
					skip={skip}
					check={check}>
					<div className={`${classes.scrollableRoot} ${classes.centered}`}>
						<FillInTheBlanksCard
							ref={childRef}
							currentQuestionNumber={currentQuestion}
							question={question[currentQuestion]}
							moveAway={false}
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

export default FillInTheBlanks;
