import React, { useEffect, useState } from "react";
import { GetUnavailableDates, BookAppointment } from "../api";

export default function Checkout() {
	useEffect(() => {
		const bookApp = async () => {
			const appointment = {
				user_name: "Mateo",
				user_second_name: "Rubinstein",
				email: "mateorubinstein@icloud.com",
				phone_number: "671757401",
				id_number: "Y0637167N",
				date: "2022-01-20T18:00",
			};
			BookAppointment({ id: 1, appointment });
		};
		bookApp();
	}, []);
	return <div>CHECKOUT PAGE</div>;
}
