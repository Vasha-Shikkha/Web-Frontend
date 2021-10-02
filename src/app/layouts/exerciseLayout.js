import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {getWordMeaning} from "../axios/services/dictionary";

import QuestionNumber from "../components/QuestionNumber";
import Button from "../components/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import SearchIcon from "@material-ui/icons/Search";
import Loading from "../components/Loading";
import VerdictBanner from "../components/VerdictBanner";

import "../styles/scrollbar.css";
import styles from "../styles/exerciseLayoutStyles";

const ExerciseLayout = (props) => {
	const classes = styles();
	const history = useHistory();
	const [showSidebar, setShowSidebar] = useState(false);
	const [dictionarySearch, setDictionarySearch] = useState("");
	const [searchRes, setSearchRes] = useState({});
	const [loading, setLoading] = useState(false);

	const searchWord = () => {
		if (!dictionarySearch || dictionarySearch.length === 0) return;

		setShowSidebar(true);
		setLoading(true);
		getWordMeaning(dictionarySearch, (err, axios_data) => {
			if (!err) {
				setSearchRes(axios_data);
			} else {
				setSearchRes({word: "word not found"});
			}

			setLoading(false);
		});
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			searchWord();
		}
	};

	return (
		<div className={classes.outerContainer}>
			<VerdictBanner
				correct={props.correct}
				anime={props.anime}
				getNext={props.getNext}
				tryAgain={props.tryAgain}
				showAnswer={props.showAnswer}
			/>

			<div
				id="dictionaryScroll"
				className={classes.sidebar}
				style={showSidebar && !props.anime ? {top: "10vh"} : {top: "-100vh"}}>
				<div className={`${classes.dictionaryNav}`}>
					<div className={classes.cancelIconContainer}>
						<CancelIcon className={classes.menuBtn} onClick={() => setShowSidebar(false)} />
					</div>
				</div>

				{loading ? (
					<Loading container={classes.loadingContainer} />
				) : (
					<div className={`${classes.dictionaryContainer} ${classes.centererd}`}>
						<div
							className={classes.card}
							style={{
								zIndex: 2,
							}}>
							<div className={classes.word}>
								{dictionarySearch ? dictionarySearch.toUpperCase() : ""}
							</div>
							<div className={classes.meaning}>
								{searchRes.meaning ? searchRes.meaning.join(", ") : null}
							</div>
							{searchRes && searchRes.example && searchRes.example.length ? (
								<div className={classes.exampleHead}>Example</div>
							) : null}
							<div className={classes.example}>
								{searchRes.example ? searchRes.example.join(", ") : null}
							</div>
						</div>
					</div>
				)}
			</div>
			<div
				className={classes.root}
				style={showSidebar && !props.anime ? {filter: "blur(4px)"} : {}}>
				<div className={`${classes.nav}`}>
					<div className={classes.iconContainer}>
						<CancelIcon className={classes.menuBtn} onClick={() => history.goBack()} />
						<div className={classes.nameContainerDesktop}>{props.exerciseName}</div>
						<div className={classes.searchOuter}>
							<SearchIcon
								className={classes.menuBtn}
								onClick={() => {
									searchWord();
								}}
							/>
							<input
								type="text"
								name="dictionaryText"
								placeholder="Search Meaning"
								autoFocus={false}
								className={classes.input}
								onKeyPress={handleKeyPress}
								onChange={(e) => setDictionarySearch(e.target.value)}
							/>
						</div>
					</div>
					<div className={classes.nameContainerMobile}>{props.exerciseName}</div>
					<div className={classes.barContainer}>
						<QuestionNumber
							totalQuestions={props.totalQuestions}
							currentQuestionNumber={props.currentQuestionNumber}
						/>
					</div>
				</div>
				<div className={classes.child}>{/* {props.children} */}</div>
				<div className={`${classes.btnContainer} ${classes.container}`}>
					<div className={`${classes.btn}`}>
						<Button styles={classes.btn1} text="Skip" onClick={props.skip} />
					</div>

					<div className={classes.btn}>
						<Button styles={classes.btn2} text="Check" onClick={props.check} />
					</div>
				</div>
			</div>
		</div>
	);
};

ExerciseLayout.propTypes = {
	children: PropTypes.object.isRequired,
	exerciseName: PropTypes.string.isRequired,
	skip: PropTypes.func.isRequired,
	check: PropTypes.func.isRequired,
	totalQuestions: PropTypes.number.isRequired,
	currentQuestionNumber: PropTypes.number.isRequired,
	scrollable: PropTypes.bool,
	correct: PropTypes.bool.isRequired,
	getNext: PropTypes.func.isRequired,
	tryAgain: PropTypes.func.isRequired,
	showAnswer: PropTypes.func.isRequired,
	anime: PropTypes.bool.isRequired,
};

export default ExerciseLayout;
