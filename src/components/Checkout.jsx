import React from "react";
import { Link } from "react-router-dom";
export default function Checkout({ appointment }) {
	return (
		<div className="text-center">
			<div
				className="container"
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
					height: "100%",
					width: "100%",
				}}
			>
				<div className="section-title">
					<h2>Confirmación y pago</h2>
					<p>
						Para poder reservar su cita deberá confirmar los detalles y a
						continuación continuar a la pasarela de pago.
					</p>
				</div>
				<form
					style={{
						width: "60%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<div className="row">
						<div className="col-md-6">
							<p style={{ textAlign: "left" }}>Nombre:</p>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									placeholder={appointment.name + " " + appointment.second_name}
									disabled
								/>
							</div>
						</div>

						<div className="col-md-6">
							<p style={{ textAlign: "left" }}>Email:</p>
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									placeholder={appointment.email}
									disabled
								/>
								<p className="help-block text-danger"></p>
							</div>
						</div>
						<div className="col-md-6">
							<p style={{ textAlign: "left" }}>Teléfono:</p>
							<div className="form-group">
								<input
									type="phone_number"
									className="form-control"
									placeholder={appointment.phone}
									disabled
								/>
								<p className="help-block text-danger"></p>
							</div>
						</div>
						<div className="col-md-6">
							<p style={{ textAlign: "left" }}>D.N.I.:</p>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									placeholder={appointment.id}
									disabled
								/>
								<p className="help-block text-danger"></p>
							</div>
						</div>

						<div className="col-md-6">
							<p style={{ textAlign: "left" }}>Fecha:</p>
							<div className="form-group">
								<input
									type="date"
									className="form-control"
									value={appointment.fecha}
									disabled
								/>
								<p className="help-block text-danger"></p>
							</div>
						</div>
						<div className="col-md-6">
							<p style={{ textAlign: "left" }}>Hora:</p>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									value={appointment.hora}
									disabled
								/>
								<p className="help-block text-danger"></p>
							</div>
						</div>
					</div>
					<div id="success"></div>
					<div
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "space-evenly",
							marginTop: "2rem",
						}}
					>
						<Link to="/#book">
							<button type="button" className="btn btn-custom-mod btn-lg">
								Modificar
							</button>
						</Link>
						<button type="submit" className="btn btn-custom btn-lg">
							Confirmar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
