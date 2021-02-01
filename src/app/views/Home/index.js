import React from "react";
import {Link} from "react-router-dom";

import HomeImg from "../../assets/home_img.svg";
import Vocabulary from "../../assets/vocabulary.svg";
import Grammar from "../../assets/grammar.svg";
import styles from "./styles";

const Home = () => {
	const classes = styles();
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
					<Link to="/vocabulary" className={classes.box}>
						<div className={classes.thumbnail}>
							<img className={classes.img} src={Vocabulary} alt="" />
						</div>
						<div className={classes.boxText}>VOCABULARY</div>
					</Link>
					<Link to="" className={classes.box}>
						<div className={classes.thumbnail}>
							<img className={classes.img} src={Grammar} alt="" />
						</div>
						<div className={classes.boxText}>GRAMMAR</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
