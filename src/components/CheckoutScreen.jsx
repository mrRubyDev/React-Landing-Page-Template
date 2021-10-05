import React, { useContext } from "react";
import { BookAppointment } from "../api";
import { AppointmentsContext } from "../App";
import { NavigationExternal } from "./NavigationExternal";
import Checkout from "./Checkout";

export default function CheckoutScreen() {
	const appointment = useContext(AppointmentsContext).appointment;

	return (
		<div>
			<NavigationExternal />
			<Checkout appointment={appointment} />
		</div>
	);
}
