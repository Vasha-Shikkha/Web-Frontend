import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";

import {AuthProvider} from "../stateHandlers/authContext";
import PrivateWrapper from "./privateWrapper";

import Loading from "../components/Loading";

// use code splitting for better ux
const Landing = lazy(() => import("../views/Landing"));
const Auth = lazy(() => import("../views/Auth"));
const Home = lazy(() => import("../views/Home"));
const MCQ = lazy(() => import("../views/MCQ"));
const TrueFalse = lazy(() => import("../views/TrueFalse"));

const theme = createMuiTheme({
	palette: {
		colors: {
			primary: "#8577E2",
			secondary: "#e5e5e5",
			background: "#F2F2F2",
			textLight: "#2E303E",
			incorrect: "#fac1c1",
			correct: "#b6eb8a",
		},
	},

	typography: {
		// Use the system font instead of the default Roboto font.
		// fontFamily: "Montserrat",
		// useNextVariants: true,
	},
});

const BaseLayout = () => (
	<Router>
		<Suspense fallback={<Loading />}>
			<AuthProvider>
				<MuiThemeProvider theme={theme}>
					<div>
						<Switch>
							<Route
								exact
								path="/home"
								render={(props) => <PrivateWrapper component={<Home {...props} />} />}
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

							<Route exact path="/test" component={TrueFalse} />
							<Route exact path="/" component={Landing} />
							<Route exact path="/auth" component={Auth} />
						</Switch>
					</div>
				</MuiThemeProvider>
			</AuthProvider>
		</Suspense>
	</Router>
);

export default BaseLayout;
