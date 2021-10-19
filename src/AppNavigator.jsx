import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Privacy from "./components/Privacy";
import Legal from "./components/Legal";
import Cookies from "./components/Cookies";
import App, { AppointmentsContext } from "./App";
import { GetUnavailableDates } from "./api";
import CheckoutScreen from "./components/CheckoutScreen";
import SuccessOrFailure from "./components/SuccessOrFailure";
export default function AppNavigator() {
	const [unavailableDates, setUnavailableDates] = useState([]);
	const [appointment, setAppointment] = useState({
		name: "Mateo",
		second_name: "Rubinstein",
		email: "mateorubinstein@icloud.com",
		phone: "912319823",
		id: "adsfadsf",
		fecha: "2022-01-19",
		hora: "14:00",
		doctor: "0",
	});

	useEffect(() => {
		const fetchDates = async () => {
			const dates = await GetUnavailableDates();
			setUnavailableDates(dates);
		};
		fetchDates();
	}, []);
	return (
		<AppointmentsContext.Provider
			value={{ unavailable: unavailableDates, appointment, setAppointment }}
		>
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
							<CheckoutScreen />
						</Route>
						<Route path="/success" exact>
							<SuccessOrFailure />
						</Route>
						<Route path="/failure" exact>
							<SuccessOrFailure failure />
						</Route>
					</Switch>
				</React.StrictMode>
			</Router>
		</AppointmentsContext.Provider>
	);
}
