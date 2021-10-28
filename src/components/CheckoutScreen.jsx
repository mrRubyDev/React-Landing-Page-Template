import React, { useContext, useEffect, useState } from "react";
import { BookAppointment, checkoutSession } from "../api";
import { AppointmentsContext } from "../App";
import { NavigationExternal } from "./NavigationExternal";
import Checkout from "./Checkout";
import LottieAnimation from "../media/lottie";
import LoadSpinner from "../media/loading.json";

export default function CheckoutScreen() {
	const appointment = useContext(AppointmentsContext).appointment;
	const [loading, setLoading] = useState(false);
	const handleSubmit = async e => {
		setLoading(true);
		const session = await checkoutSession({
			email: appointment.email,
			name: appointment.name,
			id_number: appointment.id,
			doctor: appointment.doctor,
		});
		setLoading(false);
		BookAppointment({
			user_name: appointment.name,
			user_second_name: appointment.second_name,
			date: [appointment.fecha, appointment.hora].join("T"),
			email: appointment.email,
			phone_number: appointment.phone,
			doctor_id: appointment.doctor,
			id_number: appointment.id,
		});
		window.location.href = session.url;
	};
	useEffect(() => {
		if (loading) setTimeout(() => setLoading(false), 8000);
	}, [loading]);

	return (
		<div>
			<NavigationExternal />
			<Checkout appointment={appointment} handleSubmit={handleSubmit} />
			{loading && (
				<div
					style={{
						position: "absolute",
						top: 0,
						width: "100vw",
						height: "100vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "rgba(255,255,255,0.5)",
					}}
				>
					<LottieAnimation lotti={LoadSpinner} loop width={200} height={200} />
				</div>
			)}
		</div>
	);
}
