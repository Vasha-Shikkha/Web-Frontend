import React from "react";
import {Link} from "react-router-dom";
import colors from "../../styles/colors";

import JumbledSentenceIcon from "../../assets/exercise/JumbledSentence.svg";
import SentenceMatchingIcon from "../../assets/exercise/SentenceMatching.svg";
import FillInTheBlanksIcon from "../../assets/exercise/FillInTheBlanks.svg";

import styles from "./styles";

const Vocabulary = () => {
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

	return <div className={classes.root}></div>;
};

export default Vocabulary;
