import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import PropTypes from "prop-types";
import config from "../../../util/config";
import {Grid} from "@material-ui/core";
import colors from "../../../styles/colors";
import styles from "./styles";

const DragCaptionToPictureCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			let answer = {isCorrect: true};

			let temp_color = [...boxColors];
			for (let i = 0; i < temp_color.length; i++) {
				if (props.question[i].caption === currentAnswers[i]) temp_color[i] = colors.correct;
				else {
					temp_color[i] = colors.incorrect;
					answer.isCorrect = false;
				}
			}

			setBoxColors(temp_color);
			return answer;
		},
	}));

	const classes = styles();
	const [boxColors, setBoxColors] = useState([]);
	const [currentAnswers, setCurrentAnswers] = useState([]);

	useEffect(() => {
		setBoxColors(props.question.map(() => colors.white));
		setCurrentAnswers(props.question.map(() => ""));
	}, [props.question]);

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;

		let temp = [...currentAnswers];
		let dest_index = parseInt(result.destination.droppableId.split("~")[1]);
		temp[dest_index] = props.question[result.source.index].caption;
		setCurrentAnswers(temp);
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<div className={classes.root}>
				<div className={classes.optionContainer}>
					<Droppable droppableId="option_container" direction="horizontal" isDropDisabled={true}>
						{(provided) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
								className={`${classes.optionContainer}`}>
								{props.question &&
									props.question.map((obj, idx) => (
										<Draggable key={idx} draggableId={`option~${obj.caption}`} index={idx}>
											{(provided2) => {
												return (
													<div
														ref={provided2.innerRef}
														{...provided2.draggableProps}
														{...provided2.dragHandleProps}
														className={classes.box}>
														{obj.caption}
													</div>
												);
											}}
										</Draggable>
									))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</div>

				<div className={classes.gridroot}>
					<Grid container spacing={5}>
						{props.question &&
							props.question.map((obj, idx) => (
								<Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={idx}>
									<div className={classes.imageBox}>
										<img src={config.IMAGE_BASE + obj.image} alt="" className={classes.image} />
										<Droppable droppableId={`drop_blank~${idx.toString()}`} isDropDisabled={false}>
											{(provided) => (
												<div
													{...provided.droppableProps}
													ref={provided.innerRef}
													className={`${classes.answerContainer}`}
													style={{background: boxColors[idx]}}>
													{currentAnswers[idx]}
													{provided.placeholder}
												</div>
											)}
										</Droppable>
									</div>
								</Grid>
							))}
					</Grid>
				</div>
			</div>
		</DragDropContext>
	);
});

DragCaptionToPictureCard.propTypes = {
	question: PropTypes.array.isRequired,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
	taskDetail: PropTypes.object.isRequired,
};

export default DragCaptionToPictureCard;
