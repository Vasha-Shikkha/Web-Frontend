import React from "react";
import PropTypes from "prop-types";
import styles from "./style";

const AboutCard = (props) => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.imageContainer}>
				<img src={props.image} alt="" className={classes.image} />
			</div>
			<div className={classes.name}>{props.name}</div>
			<div className={classes.type}>{props.type}</div>
			<div className={classes.description}>{props.description}</div>
		</div>
	);
};

AboutCard.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default AboutCard;
