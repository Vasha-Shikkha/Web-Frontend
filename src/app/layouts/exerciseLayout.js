import React, {useState} from "react";
import PropTypes from "prop-types";
import {makeStyles, TextField} from "@material-ui/core";
import {getWordMeaning} from "../axios/services/dictionary";

import QuestionNumber from "../components/QuestionNumber";
import Button from "../components/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import SearchIcon from "@material-ui/icons/Search";
import colors from "../styles/colors";
import Loading from "../components/Loading";
import VerdictBanner from "../components/VerdictBanner";
import ClipboardIcon from "../assets/clipboard.svg";

import "../styles/scrollbar.css";

const styles = makeStyles((theme) => ({
	outerContainer: {
		position: "relative",
	},

	root: {
		width: "100%",
		position: "absolute",
	},

	nav: {
		background: "white",

		[theme.breakpoints.down("sm")]: {
			height: "30vh",
		},

		[theme.breakpoints.up("md")]: {
			height: "25vh",
		},
	},

	outerNav: {
		width: "100%",
		height: "75%",
		position: "relative",
	},

	barContainer: {
		width: "100%",
		height: "25%",
		padding: "0px 5% 0px 5%",
	},

	upperNav: {
		width: "100%",
		position: "absolute",
	},

	container: {
		width: "100%",
		background: "white",

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",

		padding: "0px 5% 0px 5%",
	},

	btnContainer: {
		height: "15vh",
		flexWrap: "wrap",
	},

	child: {
		height: "70vh",
		width: "100%",
		background: "white",
	},

	childScrollable: {
		width: "100%",
		background: "white",
	},

	btn: {
		width: "45%",
		height: 40,
	},

	m10: {
		[theme.breakpoints.down("sm")]: {
			marginBottom: 10,
		},

		[theme.breakpoints.up("md")]: {
			marginBottom: 0,
		},
	},

	btn1: {
		color: theme.palette.colors.primary,
		background: "white",
		border: `1px solid ${theme.palette.colors.primary}`,
		boxSizing: "border-box",
		boxShadow: `0px 4px 4px ${theme.palette.colors.primary}`,
		borderRadius: 10,
	},

	btn2: {
		color: "white",
		background: theme.palette.colors.primary,
		boxSizing: "border-box",
		boxShadow: `0px 4px 4px rgba(128, 0, 255, 0.5)`,
		borderRadius: 10,
	},

	btn3: {
		color: "white",
		background: theme.palette.colors.primary,
		boxSizing: "border-box",
		borderRadius: 10,
	},

	nameContainer: {
		width: "100%",
		height: "100%",
		position: "absolute",

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "flex-end",
		alignItems: "flex-end",

		fontSize: 16,
		fontWeight: 600,
	},

	iconContainer: {
		width: "100%",
		height: "100%",
		paddingLeft: "5%",
		paddingRight: "5%",
		position: "absolute",

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",
	},

	menuBtn: {
		color: theme.palette.colors.primary,
		fontSize: 30,
		cursor: "pointer",
	},

	cancelIconContainer: {
		height: "100%",
		width: "100%",
		paddingRight: "5%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignContent: "center",
		alignItems: "center",

		background: "#ECE0FF",
	},

	sidebar: {
		position: "fixed",
		height: "80vh",
		width: "90%",
		left: "5%",

		zIndex: 10,
		background: "#ECE0FF",

		overflowY: "auto",

		transformOrigin: "right",
		transitionDuration: "1.0s",
		boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)",
	},

	searchOuter: {
		width: 200,
		height: 40,
		borderRadius: 20,
		padding: 5,

		border: `2px solid ${theme.palette.colors.violetMedium}`,

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignContent: "center",
		alignItems: "center",
	},

	input: {
		width: "75%",
		height: "100%",
		border: "0px solid transparent",
		color: theme.palette.colors.violetMedium,

		"&:focus": {
			outline: "none",
		},

		"&::placeholder": {
			color: theme.palette.colors.violetMedium,
		},
	},

	loadingContainer: {
		height: "50vh",
	},

	centererd: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	dictionaryContainer: {
		padding: "5%",
	},

	word: {
		fontSize: 16,
		fontWeight: 600,
		textDecoration: `underline ${theme.palette.colors.violetText}`,
		color: theme.palette.colors.violetText,

		marginBottom: 25,
	},

	meaning: {
		fontSize: 14,
		marginBottom: 50,
	},

	exampleHead: {
		fontSize: 14,
		fontWeight: 600,

		marginBottom: 5,
		color: theme.palette.colors.violetDark,
	},

	example: {
		fontSize: 14,
		color: theme.palette.colors.violetText,
		fontStyle: "italic",
	},

	topbarRight: {
		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
	},
}));

const ExerciseLayout = (props) => {
	const classes = styles();
	const [showSidebar, setShowSidebar] = useState(false);
	const [dictionarySearch, setDictionarySearch] = useState("");
	const [searchRes, setSearchRes] = useState({});
	const [loading, setLoading] = useState(false);

	const searchWord = () => {
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

	const getBack = () => {
		if (showSidebar) return;
		console.log("getting back");
	};

	return (
		<div className={classes.outerContainer}>
			<VerdictBanner correct={props.correct} anime={props.anime} getNext={props.getNext} />

			<div
				id="dictionaryScroll"
				className={classes.sidebar}
				style={showSidebar && !props.anime ? {top: "10vh"} : {top: "-100vh"}}>
				<div className={`${classes.nav}`} style={{background: colors.lightPink}}>
					<div className={classes.cancelIconContainer}>
						<CancelIcon className={classes.menuBtn} onClick={() => setShowSidebar(false)} />
					</div>
				</div>

				{loading ? (
					<Loading container={classes.loadingContainer} />
				) : (
					<div className={classes.dictionaryContainer}>
						<div className={classes.word}>{searchRes.word ? searchRes.word.toUpperCase() : ""}</div>
						<div className={classes.meaning}>
							{searchRes.meaning ? searchRes.meaning.join(", ") : ""}
						</div>
						{searchRes.example && searchRes.example.length && (
							<div className={classes.exampleHead}>Example</div>
						)}

						<div className={classes.example}>
							{searchRes.example ? searchRes.example.join(",") : ""}
						</div>
					</div>
				)}
			</div>
			<div
				className={classes.root}
				style={showSidebar && !props.anime ? {filter: "blur(4px)"} : {}}>
				<div className={`${classes.nav}`}>
					<div className={classes.outerNav}>
						<div className={classes.nameContainer}>{props.exerciseName}</div>
						<div className={classes.iconContainer}>
							<CancelIcon className={classes.menuBtn} onClick={() => getBack()} />
							<div className={classes.topbarRight}>
								<div className={classes.searchOuter}>
									<SearchIcon
										className={classes.menuBtn}
										onClick={() => {
											searchWord();
											setShowSidebar(true);
										}}
									/>
									<input
										type="text"
										name="dictionaryText"
										placeholder="Search..."
										autoFocus={false}
										className={classes.input}
										onChange={(e) => setDictionarySearch(e.target.value)}
									/>
								</div>
								<img src={ClipboardIcon} alt="" style={{width: 30, height: 30, marginLeft: 10}} />
							</div>
						</div>
					</div>

					<div className={classes.barContainer}>
						<QuestionNumber
							totalQuestions={props.totalQuestions}
							currentQuestionNumber={props.currentQuestionNumber}
						/>
					</div>
				</div>
				<div className={props.scrollable ? classes.childScrollable : classes.child}>
					{props.children}
				</div>
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
	backToHome: PropTypes.func.isRequired,
	totalQuestions: PropTypes.number.isRequired,
	currentQuestionNumber: PropTypes.number.isRequired,
	scrollable: PropTypes.bool,
	correct: PropTypes.bool.isRequired,
	getNext: PropTypes.func.isRequired,
	anime: PropTypes.bool.isRequired,
};

export default ExerciseLayout;
