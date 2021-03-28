import React, {useEffect, useState, useRef} from "react";
import {Redirect} from "react-router-dom";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import JumbledSentenceCard from "../../components/ExerciseCard/JumbledSentenceCard";
import {getJumbledSentence} from "../../axios/services/exercise/jumbledSentence";

import styles from "../../styles/exerciseViewStyles";

const JumbledSentence = (props) => {
	const classes = styles();
	const [question, setQuestion] = useState([]);
	const [moveAway, setMoveAway] = useState([]);
	const [checked, setChecked] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [loading, setLoading] = useState(true);
	const [showVerdict, setShowVerdict] = useState(false);
	const [correct, setCorrect] = useState(true);
	const [redirect, setRedirect] = useState(null);

	const childRef = useRef();

	useEffect(() => {
		setLoading(true);

		let params = {
			topic_id: 1, //props.location.state.topicId,
			offset: 0,
			limit: 5,
			level: 1, //props.location.state.level,
		};

		getJumbledSentence(params, (err, axios_data) => {
			console.log(err, axios_data);
			if (err) console.error(err);
			else {
				//**********************change this - array of array will come */
				setQuestion(axios_data);
				setChecked(axios_data.map(() => false));
				setLoading(false);
				setCurrentQuestion(0);
			}
		});
		//props.location.state.topicId, props.location.state.level
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
					exerciseName="Jumbled Sentence"
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
						<JumbledSentenceCard
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

export default JumbledSentence;
