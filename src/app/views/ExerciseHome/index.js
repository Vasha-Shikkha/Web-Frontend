import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {getAllExercises} from "../../axios/services/exercises";

import {Grid} from "@material-ui/core";
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
