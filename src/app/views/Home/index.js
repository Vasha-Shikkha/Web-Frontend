import React from "react";
import {useHistory} from "react-router-dom";

import HomeImg from "../../assets/home_img.svg";
import Vocabulary from "../../assets/vocabulary.svg";
import Grammar from "../../assets/grammar.svg";
import styles from "./styles";

const Home = () => {
	const classes = styles();
	const history = useHistory();

	return (
		<div className={classes.root}>
			<div className={classes.navContainer}></div>
			<div className={`${classes.homeImgContainer} ${classes.centered}`}>
				<img className={classes.homeImg} src={HomeImg} alt="" />
			</div>
			<div className={classes.taskContainer}>
				<div className={classes.heading}>Welcome Learner!</div>
				<div className={classes.description}>
					Keep practising your English by completing new lessons and revisiting your old lessons
				</div>
				<div className={classes.boxContainer}>
					<div
						onClick={() => history.push("/practice/communicative")}
						className={`${classes.box} ${classes.m20}`}>
						<div className={classes.thumbnail}>
							<img className={classes.img} src={Vocabulary} alt="" />
						</div>
						<div className={classes.boxText}>COMMUNICATIVE</div>
					</div>
					<div onClick={() => history.push("/practice/grammar")} className={classes.box}>
						<div className={classes.thumbnail}>
							<img className={classes.img} src={Grammar} alt="" />
						</div>
						<div className={classes.boxText}>GRAMMAR</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
