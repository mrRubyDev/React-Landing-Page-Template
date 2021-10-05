import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { AppointmentsContext } from "../App";
const initialState = {
	name: "",
	second_name: "",
	email: "",
	message: "",
	phone: "",
	id: "",
	doctor: "",
	fecha: "",
	hora: "",
};

const POSSIBLE_TIMINGS = [
	"09:00",
	"09:30",
	"10:00",
	"10:30",
	"11:00",
	"11:30",
	"12:00",
	"12:30",
	"13:00",
	"13:30",
	"14:00",
	"14:30",
	"15:00",
	"15:30",
	"16:00",
	"16:30",
	"17:00",
	"17:30",
	"18:00",
	"18:30",
	"19:00",
	"19:30",
	"20:00",
];
export default function Book({ data }) {
	const [
		{ name, second_name, email, message, phone, id, doctor, fecha, hora },
		setState,
	] = useState(initialState);
	const [errorMessage, setErrorMessage] = useState("");
	const handleChange = e => {
		const { name, value } = e.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};
	const context = useContext(AppointmentsContext);
	const unavailableDates = context.unavailable;
	const history = useHistory();
	const canSubmit = () => {
		const emailSubmit = emailValidation(email);
		const nameSubmit = nameValidation("Name", name);
		const secondNameSubmit = nameValidation("Second name", name);
		const messageSubmit = nameValidation("Message", message);
		const phoneSubmit = nameValidation("Phone", phone);
		const idSubmit = nameValidation("ID", id);
		const doctorSubmit = nameValidation("Doctor", doctor);
		const dateSubmit = nameValidation("Date", fecha);
		const hourSubmit = nameValidation("Timing", hora);
		if (
			emailSubmit &&
			nameSubmit &&
			messageSubmit &&
			secondNameSubmit &&
			phoneSubmit &&
			idSubmit &&
			doctorSubmit &&
			dateSubmit &&
			hourSubmit
		)
			return true;
		else return false;
	};

	const emailValidation = email => {
		if (
			/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
				email
			)
		) {
			if (errorMessage.length) setErrorMessage("");
			return true;
		}
		if (email === "") {
			setErrorMessage("Email is required");
			return false;
		}
		setErrorMessage("Please enter a valid email");
		return false;
	};

	const nameValidation = (fieldName, fieldValue) => {
		if (fieldValue === "") {
			setErrorMessage(`${fieldName} is required`);
			return false;
		}
		if (fieldValue.length < 3) {
			setErrorMessage(`${fieldName} needs to be at least three characters`);
			return false;
		}
		if (errorMessage.length) setErrorMessage("");
		return true;
	};
	const handleSubmit = e => {
		e.preventDefault();
		if (canSubmit) {
			context.setAppointment({
				name,
				second_name,
				email,
				message,
				phone,
				id: id.toUpperCase(),
				doctor,
				fecha,
				hora,
			});
			history.push("/checkout");
		}
	};

	const forbiddenTimings = (doctor_id, date) => {
		if (!doctor_id || !date.length) return [];
		if (new Date(date).getDay() === 7) return true;
		else {
			if (unavailableDates[doctor_id]) {
				const hours = [];
				unavailableDates[doctor_id].forEach(d => {
					const split = d.split("T");
					if (split[0] === date) {
						hours.push(split[1]);
					}
				});
				return hours;
			} else return true;
		}
	};

	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				marginBottom: "5rem",
			}}
			id="book"
		>
			<div
				className="col-md-8 section-title"
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<h2>Concertar una cita</h2>
				<p>Consulte nuestra disponibilidad y concerte su cita hoy.</p>
			</div>
			<form
				name="sentMessage"
				validate={true}
				onSubmit={handleSubmit}
				style={{
					maxWidth: "80%",
					alignItems: "center",
				}}
			>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="text"
								id="name"
								name="name"
								className="form-control"
								placeholder="Nombre"
								required
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="text"
								id="second_name"
								name="second_name"
								className="form-control"
								placeholder="Apellidos"
								required
								onChange={handleChange}
							/>
							<p className="help-block text-danger"></p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="email"
								id="email"
								name="email"
								className="form-control"
								placeholder="Email"
								required
								onChange={handleChange}
							/>
							<p className="help-block text-danger"></p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="phone_number"
								id="phone"
								name="phone"
								className="form-control"
								placeholder="Teléfono"
								required
								onChange={handleChange}
							/>
							<p className="help-block text-danger"></p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="text"
								id="id"
								name="id"
								className="form-control"
								placeholder="D.N.I."
								onChange={handleChange}
							/>
							<p className="help-block text-danger"></p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<select
								type="text"
								id="doctor"
								name="doctor"
								value="Seleccione un médico"
								className="form-control"
								onChange={handleChange}
							>
								<option disabled defaultValue>
									Seleccione un médico
								</option>
								{data &&
									data.map(
										(el, i) =>
											el.doctor && (
												<option key={i} value={el.id}>
													{el.name}
												</option>
											)
									)}
							</select>
							<p className="help-block text-danger"></p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="date"
								id="fecha"
								name="fecha"
								className="form-control"
								min={new Date().toISOString().split("T")[0]}
								required
								onChange={handleChange}
							/>
							<p className="help-block text-danger"></p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<select
								type="text"
								id="hora"
								name="hora"
								className="form-control"
								placeholder="Seleccione una hora"
								required
								onChange={handleChange}
							>
								{POSSIBLE_TIMINGS.filter(
									el => !forbiddenTimings(doctor, fecha).includes(el)
								).map((time, id) => (
									<option value={time} key={id}>
										{time}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<div className="form-group">
					<textarea
						name="message"
						id="message"
						className="form-control"
						rows="4"
						placeholder="Motivo de su consulta, síntomas, etc..."
						style={{ resize: "none" }}
						onChange={handleChange}
					></textarea>
					<p className="help-block text-danger"></p>
				</div>
				<div id="success"></div>
				<div
					style={{ width: "100%", display: "flex", justifyContent: "center" }}
				>
					<button
						type="submit"
						className="btn btn-custom btn-lg"
						style={{ alignSelf: "center" }}
					>
						Reservar
					</button>
					{errorMessage.length ? (
						<h4 style={{ color: "red" }}>{errorMessage}</h4>
					) : null}
				</div>
			</form>
		</div>
	);
}
