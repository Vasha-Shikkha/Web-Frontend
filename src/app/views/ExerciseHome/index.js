import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {getAllExercises} from "../../axios/services/exercises";

import Loading from "../../components/Loading";
import BackArrowButton from "../../components/BackArrowButton";
import JumbledSentenceIcon from "../../assets/exercise/jumbledSentence.svg";
import SentenceMatchingIcon from "../../assets/exercise/sentenceMatching.svg";
import FillInTheBlanksIcon from "../../assets/exercise/fillInTheBlanks.svg";
import PictureToWordIcon from "../../assets/exercise/pictureToWord.svg";
import WordToPictureIcon from "../../assets/exercise/wordToPicture.svg";
import Pagination from "@material-ui/lab/Pagination";
import styles from "./styles";

const ExerciseHome = (props) => {
	const classes = styles();
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [questionSet, setQuestionSet] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		let params = {
			topic_id: props.location.state.topicId,
			level: props.location.state.level,
			offset: (page - 1) * 10,
			limit: 10,
		};

		setLoading(true);
		getAllExercises(params, (err, axios_data) => {
			console.log(err, axios_data);
			if (!err) {
				setTotal(axios_data.total);
				setQuestionSet(axios_data.questionSet);
				setLoading(false);
			}
		});
	}, [props.location.state.level, props.location.state.topicId, page]);

	const handlePageChange = (event, value) => {
		setPage(value);
		console.log("val", value);
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
				<BackArrowButton
					link={
						props.location.state && props.location.state.from ? props.location.state.from : "/home"
					}
				/>
			</div>
			<div className={classes.exerciseContainer}>
				{questionSet &&
					questionSet.map((obj, idx) => (
						<div className={classes.box} key={idx}>
							<div className={classes.imageContainer}>
								<img src={imagePicker(obj.taskDetail.name)} alt="" className={classes.boxImage} />
							</div>
							<div className={classes.titleContainer}>
								<div className={classes.title}>{obj.taskDetail.name}</div>
								<div className={classes.questionQuantity}>{`${obj.question.length} questions`}</div>
							</div>
						</div>
					))}
				<div className={classes.paginationContainer}>
					<Pagination
						count={total % 10 ? total / 10 + 1 : total / 10}
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
	);
};

export default ExerciseHome;
