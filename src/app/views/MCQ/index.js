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

	const check = () => {
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
					check={check}>
					<div>
						efficitur. Quisque in turpis sed quam elementum rutrum sed non erat. Nam vel blandit
						massa. Nulla quis libero egestas, pretium nulla in, tincidunt urna. Maecenas sit amet
						rutrum sapien, a ultrices metus. Pellentesque bibendum dictum scelerisque. Mauris
						malesuada eros vel eleifend faucibus. Morbi pellentesque est in pharetra facilisis.
						Nulla accumsan nisl sit amet justo facilisis, finibus facilisis lectus accumsan. Vivamus
						in faucibus nisl. Maecenas sit amet mi nibh. Maecenas accumsan sapien odio, ac ultricies
						purus eleifend id. Fusce commodo orci sapien, eget posuere magna faucibus et. Fusce ut
						ipsum pharetra, maximus nunc non, commodo magna. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Praesent sodales lorem quis lacus sodales, a rhoncus massa dapibus. Sed
						pharetra libero lorem, at placerat augue sollicitudin sed. Aenean sed libero justo.
						Aenean nec dapibus risus
					</div>
				</ExerciseLayout>
			)}
		</>
	);
};

export default MCQ;
