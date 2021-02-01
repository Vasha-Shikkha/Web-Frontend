import React, {useState} from "react";
import {Link} from "react-router-dom";

import Girl_Reading from "../../assets/girl_reading.svg";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

import Places from "../../assets/topics/places.svg";
import Birds from "../../assets/topics/birds.svg";
import Food from "../../assets/topics/food.svg";

import styles from "./styles";

const Vocabulary = () => {
	const classes = styles();
	const [level, setLevel] = useState(1);
	const [topics, setTopics] = useState([
		{
			name: "Places",
			image: Places,
		},

		{
			name: "Birds",
			image: Birds,
		},

		{
			name: "Food",
			image: Food,
		},

		{
			name: "Places",
			image: Places,
		},

		{
			name: "Birds",
			image: Birds,
		},

		{
			name: "Food",
			image: Food,
		},
	]);

	return (
		<div className={classes.root}>
			<div className={classes.imageContainer}>
				<div
					style={{background: "#fff0ff"}}
					className={`${classes.imageUpper} ${classes.centered}`}>
					<img src={Girl_Reading} alt="" className={classes.img} />
				</div>
				<div className={classes.imageUpper} style={{padding: "5%"}}>
					<Link to="/home" className={`${classes.backBtnOuter} ${classes.centered}`}>
						<ArrowBackOutlinedIcon className={classes.backBtn} />
					</Link>
				</div>
			</div>

			<div className={classes.taskContainer}>
				<div className={classes.heading}>VOCABULARY</div>

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

				<div className={classes.taskboxContainer}>
					{topics.map((obj, idx) => (
						<div className={classes.taskBoxOuter} key={idx}>
							<div className={`${classes.taskBoxInner} ${classes.centered}`}>
								<img src={obj.image} alt="" className={classes.topicImg} />
							</div>
							<div className={classes.title}>{obj.name}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Vocabulary;
