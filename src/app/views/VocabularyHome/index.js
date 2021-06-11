import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import {getCommunicativeTopics} from "../../axios/services/topics";

import Loading from "../../components/Loading";
// import colors from "../../styles/colors";
// import Triangle from "../../components/Triangle";
// import Button from "../../components/Button";
import BackArrowButton from "../../components/BackArrowButton";

import {Grid} from "@material-ui/core";
import Girl_Reading from "../../assets/girl_reading.svg";
import DummyTopic from "../../assets/dummyTopic.svg";

import styles from "./styles";

const VocabularyHome = (props) => {
	const classes = styles();
	const [type, setType] = useState("");
	const [level, setLevel] = useState(1);
	//const [showTooltip, setShowTooltip] = useState([]);
	const [redirect, setRedirect] = useState(null);
	const [topics, setTopic] = useState([]);
	const [routingStates, setRoutingStates] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setType(props.match.params.type);
		let params = {
			level: level,
			type: type,
		};

		setLoading(true);
		if (params.type.length === 0) {
			return;
		}

		getCommunicativeTopics(params, (err, axios_data) => {
			if (err) {
				console.error(err);
			} else {
				setTopic(axios_data);
				setLoading(false);
				//setShowTooltip(topics.map(() => false));
			}
		});
	}, [level, props.match.params.type, type]);

	// const tooltipToggler = (idx) => {
	// 	let arr = [...showTooltip];
	// 	if (arr[idx]) arr[idx] = false;
	// 	else {
	// 		arr = showTooltip.map(() => false);
	// 		arr[idx] = true;
	// 	}

	// 	setShowTooltip(arr);
	// };

	// const tutorialBtnClick = (idx) => {
	// 	setRedirect("/tutorial");
	// };

	const exerciseBtnClick = (idx) => {
		setRedirect("/exercise");
		setRoutingStates({
			level: level,
			topicId: topics[idx].id,
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
				<div className={classes.heading}>{type.toUpperCase()}</div>

				<div className={classes.levelContainer}>
					{[1, 2, 3, 4, 5, 6].map((obj, idx) => (
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

				{loading ? (
					<Loading container={classes.loadingContainer} />
				) : (
					<div className={classes.gridroot}>
						<Grid container spacing={3}>
							{topics.map((obj, idx) => (
								<Grid item key={idx} xs={4} sm={4} md={2} lg={2} xl={2}>
									<div
										className={classes.taskBoxOuter}
										key={idx}
										onClick={() => exerciseBtnClick(idx)}
										//onClick={() => tooltipToggler(idx)} : tooltip is disabled for now, comment out when tutorial is ready
									>
										<div className={`${classes.taskBoxInner} ${classes.centered}`}>
											<div className={`${classes.taskImgContainer} ${classes.centered}`}>
												<img
													src={obj.image ? obj.image : DummyTopic}
													alt=""
													className={classes.topicImage}
												/>
											</div>
										</div>
										<div className={classes.title}>{obj.name}</div>
										{/* <div
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
									</div> */}
									</div>
								</Grid>
							))}
						</Grid>
					</div>
				)}
			</div>
		</div>
	);
};

export default VocabularyHome;
