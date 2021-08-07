import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

import {getAllExercises} from "../../axios/services/exercises";

import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import JumbledSentenceIcon from "../../assets/exercise/jumbledSentence.svg";
import SentenceMatchingIcon from "../../assets/exercise/sentenceMatching.svg";
import FillInTheBlanksIcon from "../../assets/exercise/fillInTheBlanks.svg";
import PictureToWordIcon from "../../assets/exercise/pictureToWord.svg";
import WordToPictureIcon from "../../assets/exercise/wordToPicture.svg";
import Pagination from "@material-ui/lab/Pagination";
import styles from "./styles";

const ExerciseHome = (props) => {
	const classes = styles();
	const history = useHistory();
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [questionSet, setQuestionSet] = useState([]);
	const [total, setTotal] = useState(1);
	const [linkMapping, setLinkMapping] = useState(new Map());

	useEffect(() => {
		// map the links
		let temp = new Map();
		temp.set("Sentence Matching", "/sentence-matching");
		temp.set("MCQ", "/mcq");
		temp.set("Error in Sentence", "/error-in-sentence");
		temp.set("True False", "/true-false");
		temp.set("Word to Picture", "/word-to-picture");
		temp.set("Picture to Word", "/picture-to-word");
		temp.set("Jumbled Word", "/jumbled-word");
		temp.set("Jumbled Sentence", "/jumbled-sentence");
		temp.set("Fill in the Blanks", "/fill-in-the-blanks");
		temp.set("Drag Caption to Picture", "/drag-caption-to-picture");
		setLinkMapping(temp);

		let params = {
			topic_id: props.location.state.topicId,
			level: props.location.state.level,
			offset: (page - 1) * 10,
			limit: 10,
		};

		setLoading(true);
		getAllExercises(params, (err, axios_data) => {
			if (!err) {
				setTotal(axios_data.total);
				setQuestionSet(axios_data.questionSet);
				setLoading(false);
			}
		});
	}, [props.location.state.level, props.location.state.topicId, page]);

	const handlePageChange = (event, value) => {
		setPage(value);
	};

	const imagePicker = (name) => {
		switch (name) {
			case "Sentence Matching":
				return SentenceMatchingIcon;
			case "Jumbled Sentence":
				return JumbledSentenceIcon;
			case "Jumbled Word":
				return JumbledSentenceIcon;
			case "Word to Picture":
				return WordToPictureIcon;
			case "Picture to Word":
				return PictureToWordIcon;
			case "Fill in the Blanks":
				return FillInTheBlanksIcon;
			default:
				return FillInTheBlanksIcon;
		}
	};

	if (loading) return <Loading />;

	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<Navbar />
			</div>

			<div className={classes.contentContainer}>
				<div className={classes.exerciseContainer}>
					{questionSet &&
						questionSet.map((obj, idx) => (
							<div style={{textDecoration: "none"}} key={idx}>
								<div className={classes.box}>
									<div className={classes.boxTitleContainer}>
										<div className={classes.imageContainer}>
											<img
												src={imagePicker(obj.taskDetail.name)}
												alt=""
												className={classes.boxImage}
											/>
										</div>
										<div className={classes.titleContainer}>
											<div className={classes.title}>{obj.taskDetail.name}</div>
											<div
												className={
													classes.questionQuantity
												}>{`${obj.question.length} questions`}</div>
										</div>
									</div>
									<div className={classes.boxLinkContainer}>
										<div
											onClick={() =>
												history.push(linkMapping.get(obj.taskDetail.name), {task: obj})
											}
											className={classes.boxLinks}>
											Solve
										</div>
										<div
											onClick={() => history.push("/tutorial", {taskDetail: obj.taskDetail})}
											className={classes.boxLinks}>
											Notes
										</div>
									</div>
								</div>
							</div>
						))}
					<div className={classes.paginationContainer}>
						<Pagination
							count={total % 10 ? parseInt(total / 10, 10) + 1 : parseInt(total / 10, 10)}
							variant="outlined"
							shape="rounded"
							size="large"
							page={page}
							onChange={handlePageChange}
							color="primary"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExerciseHome;
