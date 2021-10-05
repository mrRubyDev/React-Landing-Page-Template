import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Privacy from "./components/Privacy";
import Legal from "./components/Legal";
import Cookies from "./components/Cookies";
import Checkout from "./components/Checkout";

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<Switch>
				<Route path="/" exact>
					<App />
				</Route>
				<Route path="/privacy" exact>
					<Privacy />
				</Route>
				<Route path="/legal" exact>
					<Legal />
				</Route>
				<Route path="/cookies" exact>
					<Cookies />
				</Route>
				<Route path="/checkout" exact>
					<Checkout />
				</Route>
			</Switch>
		</React.StrictMode>
	</Router>,

	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
