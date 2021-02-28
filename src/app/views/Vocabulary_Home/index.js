import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import colors from "../../styles/colors";

import Triangle from "../../components/Triangle";
import Button from "../../components/Button";
import BackArrowButton from "../../components/BackArrowButton";
import {Grid} from "@material-ui/core";
import Girl_Reading from "../../assets/girl_reading.svg";

import Places from "../../assets/topics/places.svg";
import Birds from "../../assets/topics/birds.svg";
import Food from "../../assets/topics/food.svg";

import styles from "./styles";

const Vocabulary = () => {
	const classes = styles();
	const [level, setLevel] = useState(1);
	const [showTooltip, setShowTooltip] = useState([]);
	const [redirect, setRedirect] = useState(null);
	const [topics, setTopic] = useState([]);
	const [routingStates, setRoutingStates] = useState({});

	useEffect(() => {
		setTopic([
			{
				name: "Understanding Moods with images",
				image: Places,
				availableTasks: "Picture to Word",
			},

			{
				name: "Conversation about interests",
				image: Birds,
				availableTasks: "Fill in The Blanks",
			},

			{
				name: "Games and sports",
				image: Food,
				availableTasks: "Rearrange Sentence",
			},

			{
				name: "Names of different things  (Places, Professions, Things)",
				image: Places,
				availableTasks: "Jumbled Sentence/Word",
			},

			{
				name: "City life vs. Village life",
				image: Birds,
				availableTasks: "Sentence Matching",
			},

			{
				name: "Visiting Places",
				image: Places,
				availableTasks: "Word to Picture",
			},
		]);
		setShowTooltip(topics.map(() => false));
		// eslint-disable-next-line
	}, []);

	const tooltipToggler = (idx) => {
		let arr = [...showTooltip];
		if (arr[idx]) arr[idx] = false;
		else {
			arr = showTooltip.map(() => false);
			arr[idx] = true;
		}

		setShowTooltip(arr);
	};

	const tutorialBtnClick = (idx) => {
		setRedirect("/tutorial");
	};
	const exerciseBtnClick = (idx) => {
		setRedirect("/exercise");
		setRoutingStates({
			from: "/communicative",
			level: level,
			topic: topics[idx].name,
			availableTasks: topics[idx].availableTasks,
		});
	};

	if (redirect)
		return (
			<Redirect
				to={{
					pathname: redirect,
					state: routingStates,
				}}
			/>
		);

	return (
		<div className={classes.root}>
			<div className={classes.imageContainer}>
				<div
					style={{background: "#fff0ff"}}
					className={`${classes.imageUpper} ${classes.centered}`}>
					<img src={Girl_Reading} alt="" className={classes.img} />
				</div>
				<div className={`${classes.arrowContainer}`}>
					<BackArrowButton link="/home" />
				</div>
			</div>

			<div className={classes.taskContainer}>
				<div className={classes.heading}>COMMUNICATIVE</div>

				<div className={classes.levelContainer}>
					{[1, 2, 3, 4].map((obj, idx) => (
						<div
							key={idx}
							onClick={() => setLevel(obj)}
							className={`${classes.levelBox} ${
								level === obj ? classes.levelBoxActive : classes.levelBoxInactive
							}`}>
							{`Level ${obj}`}
						</div>
					))}
				</div>

				<div className={classes.gridroot}>
					<Grid container spacing={3}>
						{topics.map((obj, idx) => (
							<Grid item key={idx} xs={4} sm={4} md={2} lg={2} xl={2}>
								<div className={classes.taskBoxOuter} key={idx} onClick={() => tooltipToggler(idx)}>
									<div className={`${classes.taskBoxInner} ${classes.centered}`}>
										<div className={`${classes.taskImgContainer} ${classes.centered}`}>
											<img src={obj.image} alt="" className={classes.topicImg} />
										</div>
									</div>
									<div className={classes.title}>{obj.name}</div>
									<div
										className={classes.tooltip}
										style={{display: showTooltip[idx] ? "" : "none"}}>
										<Triangle color={colors.violetDark} size={10} direction="up" />
										<div className={classes.tooltipRectangle}>
											<Button
												text="Tutorial"
												styles={`${classes.btn} ${classes.tutorialBtn}`}
												onClick={() => tutorialBtnClick(idx)}
											/>
											<Button
												text="Exercise"
												styles={`${classes.btn} ${classes.exerciseBtn}`}
												onClick={() => exerciseBtnClick(idx)}
											/>
										</div>
									</div>
								</div>
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default Vocabulary;
