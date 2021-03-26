import React, {useEffect, useState, useRef} from "react";
import {Redirect} from "react-router-dom";

import ExerciseLayout from "../../layouts/exerciseLayout";
import Loading from "../../components/Loading";
import MCQCard from "../../components/ExerciseCard/MCQCard";
import {getMCQ} from "../../axios/services/exercise/mcq";

import styles from "../../styles/exerciseViewStyles";

const MCQ = (props) => {
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
		let params = {
			topic_id: props.location.state.topicId,
			offset: 0,
			limit: 5,
			level: props.location.state.level,
		};

		getMCQ(params, (err, axios_data) => {
			console.log(err, axios_data);
			if (err) console.error(err);
			else {
				setQuestion(axios_data);
				setChecked(axios_data.map(() => false));
				setLoading(false);
				setCurrentQuestion(0);
			}
		});
	}, [props.location.state.topicId, props.location.state.level]);

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
					exerciseName="Multiple Choice Questions"
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
						<MCQCard
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

export default MCQ;
