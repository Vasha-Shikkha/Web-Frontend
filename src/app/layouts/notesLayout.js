import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core";
import {getWordMeaning} from "../axios/services/dictionary";

import CancelIcon from "@material-ui/icons/Cancel";
import SearchIcon from "@material-ui/icons/Search";
import Loading from "../components/Loading";

import "../styles/scrollbar.css";

const styles = makeStyles((theme) => ({
	outerContainer: {
		position: "relative",
	},

	root: {
		width: "100%",
		position: "absolute",
		padding: 25,
	},

	nav: {
		background: "white",
		[theme.breakpoints.down("md")]: {
			height: 100,
		},

		[theme.breakpoints.up("md")]: {
			height: 75,
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
	},

	btnContainer: {
		height: "20vh",
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

	dictionaryNav: {
		width: "100%",
		height: "10%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignContent: "center",
		alignItems: "center",
	},

	dictionaryContainer: {
		width: "100%",
		height: "90%",
	},

	topbarRight: {
		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
	},

	card: {
		width: "80%",
		height: "80%",
		background: "white",
		borderRadius: 20,

		position: "absolute",

		border: `0.5px solid ${theme.palette.colors.violetMedium}`,
		boxShadow: `10px 10px 5px ${theme.palette.colors.violetLight}`,

		padding: "5% 5% 0 5%",
	},

	word: {
		fontSize: 16,
		fontWeight: 600,
		borderBottom: `1px solid ${theme.palette.colors.violetText}`,
		color: theme.palette.colors.violetText,

		marginBottom: 25,
		textAlign: "center",
	},

	meaning: {
		fontSize: 14,
		textAlign: "center",

		marginBottom: 50,
	},

	exampleHead: {
		fontSize: 14,
		fontWeight: 600,
		textAlign: "center",

		marginBottom: 5,
		color: theme.palette.colors.violetDark,
	},

	example: {
		fontSize: 14,
		textAlign: "center",
		color: theme.palette.colors.violetText,
		fontStyle: "italic",
	},
}));

const NotesLayout = (props) => {
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
			<div className={classes.root} style={showSidebar ? {filter: "blur(4px)"} : {}}>
				<div className={`${classes.nav}`}>
					<div className={classes.outerNav}>
						<div className={classes.nameContainer}>{props.exerciseName}</div>
						<div className={classes.iconContainer}>
							<CancelIcon className={classes.menuBtn} onClick={() => history.goBack()} />

							<div className={classes.topbarRight}>
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
						</div>
					</div>
				</div>
				<div className={classes.childScrollable}>{props.children}</div>
			</div>
		</div>
	);
};

NotesLayout.propTypes = {
	children: PropTypes.object.isRequired,
};

export default NotesLayout;
