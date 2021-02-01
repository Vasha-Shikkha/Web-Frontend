import React from "react";
import {Link} from "react-router-dom";

import Girl_Reading from "../../assets/girl_reading.svg";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import styles from "./styles";

const Vocabulary = () => {
	const classes = styles();
	return (
		<div className={classes.root}>
			<div className={classes.imageContainer}>
				<div
					style={{background: "#fff0ff"}}
					className={`${classes.imageUpper} ${classes.centered}`}>
					<img src={Girl_Reading} alt="" className={classes.img} />
				</div>
				<div className={classes.imageUpper} style={{padding: "5%"}}>
					<div className={`${classes.backBtnOuter} ${classes.centered}`}>
						<ArrowBackOutlinedIcon className={classes.backBtn} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Vocabulary;
