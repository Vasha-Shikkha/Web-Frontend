import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {getAvailableExercises} from "../../axios/services/exercises";

import {Grid} from "@material-ui/core";
import Loading from "../../components/Loading";
import BackArrowButton from "../../components/BackArrowButton";
import JumbledSentenceIcon from "../../assets/exercise/jumbledSentence.svg";
import SentenceMatchingIcon from "../../assets/exercise/sentenceMatching.svg";
import FillInTheBlanksIcon from "../../assets/exercise/fillInTheBlanks.svg";
import PictureToWordIcon from "../../assets/exercise/pictureToWord.svg";
import WordToPictureIcon from "../../assets/exercise/wordToPicture.svg";

import styles from "./styles";

const Vocabulary = (props) => {
	const classes = styles();
	const [loading, setLoading] = useState(true);
	const [exerciseTypes, setExerciseTypes] = useState([]);

	useEffect(() => {
		let params = {
			topic: props.location.state.topicId,
			level: props.location.state.level,
		};

		if (params.topic && params.level) {
			setLoading(true);
			getAvailableExercises(params, (err, axios_data) => {
				if (err) console.error(err);
				else {
					let exercises = [
						{
							name: "Jumbled Word",
							dbName: "Jumbled Word",
							image: JumbledSentenceIcon,
							link: "/jumbled-word",
							questionQuantity: 0,
						},

						{
							name: "Jumbled Sentence",
							dbName: "Jumbled Sentence",
							image: JumbledSentenceIcon,
							link: "/jumbled-sentence",
							questionQuantity: 0,
						},

						{
							name: "Sentence Matching",
							dbName: "Sentence Matching",
							image: SentenceMatchingIcon,
							link: "/sentence-matching",
							questionQuantity: 0,
						},

						{
							name: "Fill in the Blanks",
							dbName: "Fill in the Blanks",
							image: FillInTheBlanksIcon,
							link: "/fill-in-the-blanks",
							questionQuantity: 0,
						},

						{
							name: "Picture to Word",
							image: PictureToWordIcon,
							link: "/picture-to-word",
							questionQuantity: 0,
						},

						{
							name: "Word to Picture",
							image: WordToPictureIcon,
							link: "/word-to-picture",
							questionQuantity: 0,
						},

						{
							name: "Rearrange Sentence",
							image: WordToPictureIcon,
							link: "/rearrange-sentence",
							questionQuantity: 0,
						},

						{
							name: "Multiple Choice Question",
							dbName: "MCQ",
							image: WordToPictureIcon,
							link: "/mcq",
							questionQuantity: 0,
						},
					];

					for (let i = 0; i < exercises.length; i++) {
						exercises[i].questionQuantity = axios_data[exercises[i].dbName]
							? axios_data[exercises[i].dbName]
							: 0;
					}

					setExerciseTypes(exercises);
					setLoading(false);
				}
			});
		}
	}, [props.location.state.level, props.location.state.topicId]);

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
				<Grid container spacing={3}>
					{exerciseTypes.map((obj, idx) =>
						obj.questionQuantity ? (
							<Grid key={idx} item xs={12} sm={12} md={6} lg={6} xl={6}>
								<Link
									to={{
										pathname: obj.link,
										state: {
											topicId: props.location.state.topicId,
											level: props.location.state.level,
										},
									}}
									className={classes.box}>
									<div className={classes.imageContainer}>
										<img src={obj.image} alt="" className={classes.boxImage} />
									</div>
									<div className={classes.titleContainer}>
										<div className={classes.title}>{obj.name}</div>
										<div
											className={
												classes.questionQuantity
											}>{`${obj.questionQuantity} Questions`}</div>
									</div>
								</Link>
							</Grid>
						) : null
					)}
				</Grid>
			</div>
		</div>
	);
};

export default Vocabulary;
