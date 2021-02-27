import React, {useState} from "react";
import PropTypes from "prop-types";
import {makeStyles, TextField} from "@material-ui/core";

import QuestionNumber from "../components/QuestionNumber";
import Button from "../components/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import MenuIcon from "@material-ui/icons/Menu";
import colors from "../styles/colors";
import Loading from "../components/Loading";

import "../styles/scrollbar.css";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},

	nav: {
		height: "15vh",
		background: "white",
	},

	outerNav: {
		width: "100%",
		height: "60%",
		position: "relative",
	},

	barContainer: {
		width: "100%",
		height: "40%",
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
		alignContent: "center",
		alignItems: "center",

		fontSize: 16,
		fontWeight: 600,
	},

	iconContainer: {
		width: "100%",
		height: "100%",
		paddingLeft: "5%",
		position: "absolute",

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
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
		paddingLeft: "5%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignContent: "center",
		alignItems: "center",
	},

	sidebar: {
		position: "absolute",
		height: "100vh",
		top: 0,
		zIndex: 5,
		background: theme.palette.colors.lightPink,

		overflowY: "auto",

		transformOrigin: "left",
		transitionDuration: "1.0s",

		[theme.breakpoints.down("md")]: {
			width: "70%",
			left: "-70%",
		},

		[theme.breakpoints.up("lg")]: {
			width: "50%",
			left: "-50%",
		},
	},

	textfieldContainer: {
		padding: "25px 5% 25px 5%",
		display: "flex",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",
	},

	textField: {
		width: "60%",
		height: 50,
	},

	searchBtn: {
		width: "30%",
		height: 50,
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
}));

const ExerciseLayout = (props) => {
	const classes = styles();
	const [showSidebar, setShowSidebar] = useState(true);
	const [dictionarySearch, setDictionarySearch] = useState("");
	const [searchRes, setSearchRes] = useState({});
	const [loading, setLoading] = useState(false);

	const searchWord = () => {
		setLoading(true);

		setTimeout(() => {
			setSearchRes({
				word: "Abatement",
				meaning: ["অবসান", "কমে যাওয়া"],
				example: ["The storm continued without abatement"],
			});
			setLoading(false);
		}, 3000);
	};

	return (
		<>
			<div id="dictionaryScroll" className={classes.sidebar} style={showSidebar ? {left: 0} : null}>
				<div className={`${classes.nav}`} style={{background: colors.lightPink}}>
					<div className={classes.cancelIconContainer}>
						<CancelIcon className={classes.menuBtn} onClick={() => setShowSidebar(false)} />
					</div>
				</div>

				<div className={classes.textfieldContainer}>
					<TextField
						variant="outlined"
						onChange={(e) => setDictionarySearch(e.target.value)}
						value={dictionarySearch}
						name="dictionary_search"
						className={classes.textField}
					/>

					<div className={classes.searchBtn}>
						<Button styles={classes.btn3} text="Search" onClick={searchWord} />
					</div>
				</div>

				{loading ? (
					<Loading container={classes.loadingContainer} />
				) : (
					<div className={classes.dictionaryContainer}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia elementum sem eget
						luctus. Duis libero justo, convallis eleifend pharetra eget, fringilla sodales velit.
						Mauris eu aliquet diam, et lobortis urna. Mauris suscipit sit amet massa sed viverra.
						Cras in blandit tellus. Donec nec pretium nibh, vel sagittis eros. Donec sed tellus vel
						diam lacinia imperdiet. Suspendisse potenti. Sed non tempor orci. Phasellus et hendrerit
						massa, rhoncus suscipit massa. Sed quis justo efficitur, auctor odio dapibus, aliquet
						arcu. Maecenas et eros id quam tempor gravida. Donec nec lacinia est. Praesent semper
						urna at tincidunt laoreet. Ut ac hendrerit est, sollicitudin viverra mauris. Nulla vel
						volutpat eros. Fusce faucibus id sapien efficitur vestibulum. Suspendisse ut gravida
						arcu. Nullam aliquet diam nulla, vel ultrices nulla euismod at. Etiam molestie dignissim
						gravida. Donec imperdiet, sem iaculis auctor scelerisque, mauris nulla placerat orci, a
						mollis enim augue aliquam neque. Fusce in cursus metus. Vivamus iaculis justo a ante
						semper accumsan non et arcu. Sed id venenatis ipsum. Praesent sed sem mauris. Integer
						cursus fermentum suscipit. Cras ut posuere nisi, ac egestas dui. Duis non ultrices
						dolor. Etiam tristique odio ut nibh auctor vehicula. Ut tincidunt erat dignissim neque
						facilisis, ac feugiat lectus accumsan. Donec mattis, dolor nec viverra interdum, ex
						dolor semper ante, vel finibus nisl purus sed magna. Phasellus ornare ex a velit
						consequat, eget faucibus erat mollis. Quisque auctor nulla mi, id tristique quam
						vehicula vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. Cras eros augue, tempus ut gravida nec, egestas et sapien. Etiam
						porta auctor pretium. Maecenas ullamcorper, augue mollis porttitor accumsan, diam ligula
						bibendum quam, id ullamcorper lacus neque in sem. Phasellus ligula enim, ultricies vel
						odio sit amet, tincidunt varius tortor. Donec posuere magna ac elementum sollicitudin.
						Duis sed tempor orci. Phasellus luctus dictum nisl in interdum. Donec eu tincidunt nunc.
						Phasellus pretium eget mi ac mollis. Pellentesque vel hendrerit magna. Ut erat orci,
						tristique nec venenatis eget, facilisis vel neque. Integer eget convallis mauris, ut
						malesuada turpis. Phasellus a feugiat ante, vitae consequat orci. Quisque eget nisl
						ipsum. Curabitur faucibus auctor dolor sit amet venenatis. Pellentesque risus urna,
						vestibulum nec laoreet vel, fermentum sed odio. Sed rutrum at est eget feugiat. Nam
						consectetur cursus venenatis. Cras eu urna non lorem placerat consectetur. Sed dictum
						erat orci, vel placerat augue aliquet nec. Proin blandit turpis diam, ut porttitor felis
						rhoncus at. Phasellus dictum odio lorem, ac semper sapien feugiat quis. Morbi consequat
						finibus justo, eu volutpat nisi auctor nec. Nam arcu erat, aliquam ut ex fringilla,
						ullamcorper euismod justo. Sed metus quam, finibus tristique enim non, ultricies luctus
						justo. Integer in nunc semper, ornare tortor id, dapibus tellus. Pellentesque ornare
						magna non felis gravida, a aliquam nulla posuere. Etiam feugiat placerat mi ac sagittis.
					</div>
				)}
			</div>
			<div className={classes.root} style={showSidebar ? {filter: "blur(4px)"} : {}}>
				<div className={`${classes.nav}`}>
					<div className={classes.outerNav}>
						<div className={classes.nameContainer}>{props.exerciseName}</div>
						<div className={classes.iconContainer}>
							<MenuIcon className={classes.menuBtn} onClick={() => setShowSidebar(true)} />
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
		</>
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
};

export default ExerciseLayout;
