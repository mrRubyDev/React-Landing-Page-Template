import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div id="footer">
			<div className="container text-center">
				<p>&copy; Basari Grupo Médico - Todos los derechos reservados</p>
				<div
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "center",
					}}
				>
					<p style={{ marginRight: ".5rem" }} className="footer-text">
						<Link
							to="/legal"
							style={{ color: "grey" }}
							target="_blank"
							rel="noopener noreferrer"
						>
							Aviso Legal
						</Link>
					</p>
					<p style={{ marginRight: ".5rem" }}> | </p>
					<p style={{ marginRight: ".5rem" }} className="footer-text">
						<Link
							to="/privacy"
							style={{ color: "grey" }}
							target="_blank"
							rel="noopener noreferrer"
						>
							Política de Privacidad & Cookies
						</Link>
					</p>
				</div>
				<a
					href="http://www.rubitecconsulting.com"
					target="_blank"
					rel="noreferrer"
				>
					Rubitec Consulting
				</a>
			</div>
		</div>
	);
}
