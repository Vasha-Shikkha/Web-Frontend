import React, {useState} from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import {Grid} from "@material-ui/core";

const MCQCard = (props) => {
	const classes = styles();
	const [selected, setSelected] = useState(props.question.options.map(() => false));

	const selectOption = (idx) => {
		// if not review then select
		if (props.isReview === false && !props.isChecked) props.selectOption(idx);

		if (!props.isChecked) {
			let arr = [...selected];
			arr[idx] = !arr[idx];
			setSelected(arr);
		}
	};

	return (
		<div
			style={{zIndex: props.elevation ? props.elevation : 0}}
			className={props.moveAway === false ? classes.root : `${classes.root} ${classes.transition}`}>
			<div className={`${classes.question} ${classes.centered}`}>{props.question.question}</div>
			<div className={classes.optionContainer}>
				<Grid
					container
					spacing={3}
					direction="row"
					wrap="wrap"
					justify="space-between"
					alignContent="space-between"
					alignItems="stretch">
					{props.question.options.map((obj, idx) => (
						<Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={idx}>
							<div
								style={{background: props.colors[idx]}}
								onClick={() => selectOption(idx)}
								className={`${classes.opt} ${classes.centered} ${
									selected[idx] ? classes.hi : classes.lo
								}`}>
								{obj}
							</div>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
};

MCQCard.propTypes = {
	question: PropTypes.object.isRequired,
	moveAway: PropTypes.bool,
	elevation: PropTypes.number,
	selectOption: PropTypes.func,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
	colors: PropTypes.array.isRequired,
};

export default MCQCard;
