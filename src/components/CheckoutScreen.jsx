import React, { useContext } from "react";
import { BookAppointment, checkoutSession } from "../api";
import { AppointmentsContext } from "../App";
import { NavigationExternal } from "./NavigationExternal";
import Checkout from "./Checkout";

export default function CheckoutScreen() {
	const appointment = useContext(AppointmentsContext).appointment;
	const handleSubmit = async e => {
		const book = {
			user_name: appointment.name,
			user_second_name: appointment.second_name,
			date: [appointment.fecha, appointment.hora].join("T"),
			email: appointment.email,
			phone_number: appointment.phone,
			doctor_id: appointment.doctor,
			id_number: appointment.id,
		};
		const session = await checkoutSession({
			email: appointment.email,
			name: appointment.name,
			id_number: appointment.id_number,
		});
		await BookAppointment(book);
		window.location.href = session.url;
	};

	return (
		<div>
			<NavigationExternal />
			<Checkout appointment={appointment} handleSubmit={handleSubmit} />
		</div>
	);
}
