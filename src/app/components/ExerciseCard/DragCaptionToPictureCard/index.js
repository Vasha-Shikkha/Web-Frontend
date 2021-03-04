import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import colors from "../../../styles/colors";
import styles from "./styles";

const DragCaptionToPictureCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {
			let answer = {users_answer: [], isCorrect: true};

			return answer;
		},
	}));

	const classes = styles();

	useEffect(() => {
		console.log(props.question.options);
	}, [props.question]);

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;

		console.log(result);
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<div className={classes.root}>
				<div className={classes.context}>{props.question.context}</div>
				<div className={classes.optionContainer}>
					<Droppable droppableId="option_container" direction="horizontal" isDropDisabled={true}>
						{(provided) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
								className={`${classes.optionContainer}`}>
								{props.question.options.map((obj, idx) => (
									<Draggable key={idx} draggableId={`option~${obj}`} index={idx}>
										{(provided2) => {
											return (
												<div
													ref={provided2.innerRef}
													{...provided2.draggableProps}
													{...provided2.dragHandleProps}
													className={classes.box}>
													{obj}
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
					<Grid container spacing={3}>
						{props.question.images.map((obj, idx) => (
							<Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
								<div className={classes.imageBox}>{idx}</div>
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		</DragDropContext>
	);
});

DragCaptionToPictureCard.propTypes = {
	question: PropTypes.object.isRequired,
	currentQuestionNumber: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default DragCaptionToPictureCard;
