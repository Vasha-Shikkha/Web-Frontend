import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { AuthProvider } from "../stateHandlers/authContext";
// import PrivateWrapper from "./privateWrapper";

import SignIn from "../views/SignIn";
import Landing from "../views/Landing";

const theme = createMuiTheme({
	palette: {
		colors: {
			primary: "grey",
			secondary: "",
			dark: "",
			textDark: "",
			textLight: "#9e9e9e",
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
		<AuthProvider>
			<MuiThemeProvider theme={theme}>
				<div>
					<Switch>
						{/* <Route
							exact
							path="/home"
							render={(props) => <PrivateWrapper component={<Home {...props} />} />}
						/> */}
						<Route exact path="/" component={Landing} />
						<Route exact path="/signin" component={SignIn} />
					</Switch>
				</div>
			</MuiThemeProvider>
		</AuthProvider>
	</Router>
);

export default BaseLayout;
