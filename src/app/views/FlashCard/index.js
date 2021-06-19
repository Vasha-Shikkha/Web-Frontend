import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Button from "../../components/Button";
import {getFlashCards} from "../../axios/services/flashCard";
import CancelIcon from "@material-ui/icons/Cancel";
import styles from "./styles";

const FlashCard = () => {
	const classes = styles();
	const [cards, setCards] = useState([]);
	const history = useHistory();

	useEffect(() => {
		let date = new Date();
		date.setMonth(date.getMonth() - 1);

		getFlashCards({date}, (err, axios_data) => {
			if (!err) setCards(axios_data);
		});
	}, []);

	const next = () => {
		if (!cards.length) return;

		let temp = [...cards];
		let uno = {...cards[0]};
		temp.splice(0, 1);
		temp.push(uno);
		setCards(temp);
	};

	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<div className={`${classes.nav_inner} ${classes.crossContainer}`}>
					<div onClick={() => history.goBack()}>
						<CancelIcon className={classes.cross} />
					</div>
				</div>
				<div className={`${classes.nav_inner} ${classes.centered}`}>FLASH CARDS</div>
			</div>
			<div className={`${classes.contentContainer} ${classes.centered}`}>
				{cards.map((obj, idx) => (
					<div
						key={idx}
						className={`${classes.card} ${
							idx === 1 ? classes.rotate5 : idx === 2 ? classes.rotate10 : ""
						}`}
						style={{
							zIndex: cards.length - idx,
						}}>
						<div className={classes.centered}>
							<div className={classes.word}>{obj.word.toUpperCase()}</div>
						</div>
						<div className={classes.meaning}>{obj.meaning ? obj.meaning.join(", ") : ""}</div>
						<div className={classes.exampleHead}>Example</div>
						<div className={classes.example}>{obj.example}</div>
					</div>
				))}
			</div>
			<div className={`${classes.btnContainer} ${classes.centered}`}>
				<Button text="Next" onClick={() => next()} styles={classes.btn} />
			</div>
		</div>
	);
};

export default FlashCard;
