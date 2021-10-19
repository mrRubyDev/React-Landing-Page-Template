import React from "react";
import { NavigationExternal } from "./NavigationExternal";
import LottieAnimation from "../media/lottie";
import Failed from "../media/wrong-sign.json";
import Success from "../media/success.json";
import { Link } from "react-router-dom";

export default function SuccessOrFailure({ failure }) {
	return (
		<div>
			<NavigationExternal />
			<div className="text-center">
				<div
					className="container"
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						alignItems: "center",
						height: "100%",
					}}
				>
					<div className="section-title">
						<h2>
							{failure ? "Algo ha ido mal..." : "¡Su cita está reservada!"}
						</h2>
						<p>
							{failure
								? "Vaya, parece que algo ha fallado. Por favor vuelva a intentarlo o póngase en contacto con nosotros."
								: "Gracias por su confianza. Recibirá un email de confirmación en el correo que nos ha facilitado."}
						</p>
						<LottieAnimation
							lotti={failure ? Failed : Success}
							width={200}
							height={200}
						/>
					</div>
					{/* {!failure && (
						<div style={{ width: "fit-content" }}>
							<h4 className="add-to-calendar">Añadir al calendario</h4>
						</div>
					)} */}
					<Link to="/">
						<button type="button" className="btn btn-custom btn-lg">
							Inicio
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
