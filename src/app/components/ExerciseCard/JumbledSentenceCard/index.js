import React, {useState, forwardRef, useImperativeHandle, useEffect} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {shuffle} from "../../../util/helpers";
import PropTypes from "prop-types";
import styles from "./styles";

const JumbledSentenceCard = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		check() {},
	}));

	const classes = styles();
	const [chunks, setChunks] = useState([]);

	useEffect(() => {
		let chunks = shuffle(props.question.chunks);
		setChunks(chunks);
	}, []);

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;

		let items = [...chunks];
		let reorderedItem = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem[0]);

		setChunks(items);
		console.log(result);
	};

	return (
		<div
			style={{zIndex: props.elevation ? props.elevation : 0}}
			className={props.moveAway === false ? classes.root : `${classes.root} ${classes.transition}`}>
			<div className={`${classes.centered} ${classes.instruction}`}>Re-arrange the Sentence</div>
			<DragDropContext onDragEnd={handleOnDragEnd}>
				<Droppable droppableId="word_chunks" direction="horizontal">
					{(provided) => (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
							className={`${classes.wordContainer}`}>
							{chunks.map((obj, idx) => (
								<Draggable key={obj} draggableId={obj} index={idx}>
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
			</DragDropContext>
		</div>
	);
});

JumbledSentenceCard.propTypes = {
	question: PropTypes.object.isRequired,
	moveAway: PropTypes.bool,
	elevation: PropTypes.number,
	isReview: PropTypes.bool.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default JumbledSentenceCard;
