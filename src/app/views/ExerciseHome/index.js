import React from "react";
import {Link} from "react-router-dom";

import BackArrowButton from "../../components/BackArrowButton";
import JumbledSentenceIcon from "../../assets/exercise/jumbledSentence.svg";
import SentenceMatchingIcon from "../../assets/exercise/sentenceMatching.svg";
import FillInTheBlanksIcon from "../../assets/exercise/fillInTheBlanks.svg";

import styles from "./styles";

const Vocabulary = (props) => {
	const classes = styles();
	const exerciseTypes = [
		{
			name: "Jumbled Sentence/Word",
			image: JumbledSentenceIcon,
			link: "/jumbled-sentence",
		},

		{
			name: "Sentence Matching",
			image: SentenceMatchingIcon,
			link: "/sentence-matching",
		},

		{
			name: "Fill in The Blanks",
			image: FillInTheBlanksIcon,
			link: "/fill-in-the-blanks",
		},
	];

	return (
		<div className={classes.root}>
			<BackArrowButton link={props.location.state.from} />
			<div className={classes.exerciseContainer}>
				{exerciseTypes.map((obj, idx) => (
					<div className={classes.box} key={idx}>
						<div className={classes.imageContainer}>
							<img src={obj.image} alt="" className={classes.boxImage} />
						</div>
						<div className={classes.title}>{obj.name}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Vocabulary;
