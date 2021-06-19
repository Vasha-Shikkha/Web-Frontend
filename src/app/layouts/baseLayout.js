import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";

import {AuthProvider} from "../stateHandlers/authContext";
import PrivateWrapper from "./privateWrapper";

import Loading from "../components/Loading";
import ErrorBoundary from "../util/errorBoundary";

// use code splitting for better ux
const Landing = lazy(() => import("../views/Landing"));
const Auth = lazy(() => import("../views/Auth"));
const Home = lazy(() => import("../views/Home"));
const FinishLine = lazy(() => import("../views/FinishLine"));
const Tutorial = lazy(() => import("../views/Tutorial"));
const Exercise = lazy(() => import("../views/ExerciseHome"));
const VocabularyHome = lazy(() => import("../views/VocabularyHome"));
const FlashCard = lazy(() => import("../views/FlashCard"));
const MCQ = lazy(() => import("../views/MCQ"));
const TrueFalse = lazy(() => import("../views/TrueFalse"));
const WordToPicture = lazy(() => import("../views/WordToPicture"));
const PictureToWord = lazy(() => import("../views/PictureToWord"));
const SentenceMatching = lazy(() => import("../views/SentenceMatching"));
const JumbledWord = lazy(() => import("../views/JumbledWord"));
const JumbledSentence = lazy(() => import("../views/JumbledSentence"));
const FillInTheBlanks = lazy(() => import("../views/FillInTheBlanks"));
const RearrangeSentence = lazy(() => import("../views/RearrangeSentence"));
const DragCaptionToPicture = lazy(() => import("../views/DragCaptionToPicture"));
const About = lazy(() => import("../views/About"));

const theme = createMuiTheme({
	palette: {
		colors: {
			primary: "#9E63FF",
			secondary: "#e5e5e5",
			background: "#F2F2F2",
			textLight: "#2E303E",
			incorrect: "#fac1c1",
			correct: "#b6eb8a",
			violetLight: "#ECE0FF",
			violetMedium: "#CEAFFF",
			violetDark: "#9E63FF",
			violetText: "#6C63FF",
			mediumPink: "#FFB8B8",
			lightPink: "#fff0ff",
		},
	},
});

const BaseLayout = () => (
	<Router>
		<Suspense fallback={<Loading />}>
			<AuthProvider>
				<MuiThemeProvider theme={theme}>
					<ErrorBoundary>
						<div>
							<Switch>
								<Route
									exact
									path="/home"
									render={(props) => <PrivateWrapper component={<Home {...props} />} />}
								/>

								<Route exact path="/about" component={About} />

								<Route
									exact
									path="/practice/:type"
									render={(props) => <PrivateWrapper component={<VocabularyHome {...props} />} />}
								/>

								<Route
									exact
									path="/mcq"
									render={(props) => <PrivateWrapper component={<MCQ {...props} />} />}
								/>

								<Route
									exact
									path="/true-false"
									render={(props) => <PrivateWrapper component={<TrueFalse {...props} />} />}
								/>

								<Route
									exact
									path="/word-to-picture"
									render={(props) => <PrivateWrapper component={<WordToPicture {...props} />} />}
								/>

								<Route
									exact
									path="/picture-to-word"
									render={(props) => <PrivateWrapper component={<PictureToWord {...props} />} />}
								/>

								<Route
									exact
									path="/sentence-matching"
									render={(props) => <PrivateWrapper component={<SentenceMatching {...props} />} />}
								/>

								<Route
									exact
									path="/jumbled-word"
									render={(props) => <PrivateWrapper component={<JumbledWord {...props} />} />}
								/>

								<Route
									exact
									path="/jumbled-sentence"
									render={(props) => <PrivateWrapper component={<JumbledSentence {...props} />} />}
								/>

								<Route
									exact
									path="/fill-in-the-blanks"
									render={(props) => <PrivateWrapper component={<FillInTheBlanks {...props} />} />}
								/>

								<Route
									exact
									path="/rearrange-sentence"
									render={(props) => (
										<PrivateWrapper component={<RearrangeSentence {...props} />} />
									)}
								/>

								<Route
									exact
									path="/drag-caption-to-picture"
									render={(props) => (
										<PrivateWrapper component={<DragCaptionToPicture {...props} />} />
									)}
								/>

								<Route
									exact
									path="/flash-card"
									render={(props) => <PrivateWrapper component={<FlashCard {...props} />} />}
								/>

								<Route
									exact
									path="/tutorial"
									render={(props) => <PrivateWrapper component={<Tutorial {...props} />} />}
								/>

								<Route
									exact
									path="/exercise"
									render={(props) => <PrivateWrapper component={<Exercise {...props} />} />}
								/>

								<Route
									exact
									path="/finish"
									render={(props) => <PrivateWrapper component={<FinishLine {...props} />} />}
								/>

								<Route exact path="/" component={Landing} />
								<Route exact path="/auth" component={Auth} />
							</Switch>
						</div>
					</ErrorBoundary>
				</MuiThemeProvider>
			</AuthProvider>
		</Suspense>
	</Router>
);

export default BaseLayout;
