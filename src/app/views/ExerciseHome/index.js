import React from "react";
import {Link} from "react-router-dom";

import {Grid} from "@material-ui/core";
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
			questionQuantity: 8,
		},

		{
			name: "Sentence Matching",
			image: SentenceMatchingIcon,
			link: "/sentence-matching",
			questionQuantity: 2,
		},

		{
			name: "Fill in The Blanks",
			image: FillInTheBlanksIcon,
			link: "/fill-in-the-blanks",
			questionQuantity: 2,
		},
	];

	return (
		<div className={classes.root}>
			<BackArrowButton link={props.location.state.from} />
			<div className={classes.exerciseContainer}>
				<Grid container spacing={3}>
					{exerciseTypes.map((obj, idx) => (
						<Grid key={idx} item xs={12} sm={12} md={6} lg={6} xl={6}>
							<Link to={obj.link} className={classes.box}>
								<div className={classes.imageContainer}>
									<img src={obj.image} alt="" className={classes.boxImage} />
								</div>
								<div className={classes.titleContainer}>
									<div className={classes.title}>{obj.name}</div>
									<div
										className={classes.questionQuantity}>{`${obj.questionQuantity} Questions`}</div>
								</div>
							</Link>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
};

export default Vocabulary;