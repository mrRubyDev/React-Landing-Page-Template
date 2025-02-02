import React from "react";
import Logo from "../Basari.png";

export default function checkoutNavbar() {
	return (
		<nav id="menu" className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<button
						type="button"
						className="navbar-toggle collapsed"
						data-toggle="collapse"
						data-target="#bs-example-navbar-collapse-1"
					>
						{" "}
						<span className="icon-bar"></span>{" "}
						<span className="icon-bar"></span>{" "}
						<span className="icon-bar"></span>{" "}
					</button>
					<a className="navbar-brand page-scroll" href="#page-top">
						<img
							src={Logo}
							style={{ height: "100%", width: "100%", objectFit: "cover" }}
							alt="Basari"
						/>
					</a>{" "}
				</div>

				<div
					className="collapse navbar-collapse"
					id="bs-example-navbar-collapse-1"
				>
					<ul className="nav navbar-nav navbar-right">
						<li>
							<a href="#about">Volver</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
