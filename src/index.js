import React from "react";
import ReactDOM from "react-dom";
import "./app/assets/fonts/Montserrat-Regular.ttf";
import "./app/styles/index.css";
import App from "./app/App";
// import * as serviceWorker from "./serviceWorker";
import * as Sentry from "@sentry/react";
import {Integrations} from "@sentry/tracing";

Sentry.init({
	dsn: "https://dceb2c042e654a05b5abd3e400ad79ca@o512318.ingest.sentry.io/5859763",
	integrations: [new Integrations.BrowserTracing()],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
