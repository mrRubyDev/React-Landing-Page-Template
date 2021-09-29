import React, { useState } from "react";

const initialState = {
	name: "",
	second_names: "",
	email: "",
	message: "",
	phone: "",
	id: "",
	especialidad: "",
	fecha: "",
	hora: "",
	comentarios: "",
};
export default function Book({ data }) {
	const [
		{
			name,
			second_names,
			email,
			message,
			phone,
			id,
			especialidad,
			fecha,
			hora,
			comentarios,
		},
		setState,
	] = useState(initialState);
	const handleChange = e => {
		const { name, value } = e.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};
	const clearState = () => setState({ ...initialState });

	const handleSubmit = e => {
		e.preventDefault();
		console.log({
			name,
			second_names,
			email,
			message,
			phone,
			id,
			especialidad,
			fecha,
			hora,
			comentarios,
		});
		clearState();
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
				validate
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
								id="second_names"
								name="second_names"
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
								id="especialidad"
								name="especialidad"
								className="form-control"
								placeholder="Especialidad - Especialista"
								onChange={handleChange}
							>
								{data &&
									data.map(
										(el, i) =>
											el.doctor && (
												<option key={i} value={el.name}>
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
								id="date"
								name="date"
								className="form-control"
								onChange={handleChange}
							/>
							<p className="help-block text-danger"></p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<select
								type="text"
								id="especialidad"
								name="especialidad"
								className="form-control"
								placeholder="Especialidad - Especialista"
								onChange={handleChange}
							>
								<option value="08:00">08:00</option>)
								<option value="08:00">08:30</option>)
								<option value="08:00">09:00</option>)
								<option value="08:00">09:30</option>)
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
						placeholder="Comentarios"
						style={{ resize: "none" }}
						required
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
				</div>
			</form>
		</div>
	);
}
