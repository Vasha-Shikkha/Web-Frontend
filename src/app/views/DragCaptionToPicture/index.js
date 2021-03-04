import React, {useEffect, useState, useRef} from "react";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import DragCaptionToPictureCard from "../../components/ExerciseCard/DragCaptionToPictureCard";

import styles from "../../styles/exerciseViewStyles";
import {Redirect} from "react-router-dom";

const DragCaptionToPicture = () => {
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
					"Below are some pictures of some people who are in some kind of action. Can you identify from the box in which ‘verb’ they are involved?",
				options: [
					"Walking",
					"Sleeping",
					"Studying",
					"Singing",
					"Cooking",
					"Swimming",
					"Working",
					"Jumping",
					"Playing",
				],
				answer: [
					"Sleeping",
					"Working",
					"Walking",
					"Studying",
					"Cooking",
					"Playing",
					"Swimming",
					"Singing",
					"Jumping",
				],

				images: [
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/drag_caption/1.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/drag_caption/2.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/drag_caption/3.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/drag_caption/4.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/drag_caption/5.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/drag_caption/6.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/drag_caption/7.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/drag_caption/8.jpg",
					"https://raw.githubusercontent.com/Waqar-107/temp/master/vashaShikkha/drag_caption/9.jpg",
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
					exerciseName="Drag Caption to Pictures"
					scrollable={true}
					totalQuestions={question.length}
					currentQuestionNumber={currentQuestion + 1}
					backToHome={backToHome}
					skip={skip}
					check={check}
					correct={correct}
					anime={showVerdict}
					getNext={getNext}>
					<div className={`${classes.scrollableRoot} ${classes.centered}`}>
						<DragCaptionToPictureCard
							ref={childRef}
							currentQuestionNumber={currentQuestion}
							question={question[currentQuestion]}
							isReview={false}
							isChecked={checked[currentQuestion]}
						/>
					</div>
				</ExerciseLayout>
			)}
		</>
	);
};

export default DragCaptionToPicture;
