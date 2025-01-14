import Logo from "../Basari.png";
export const Navigation = props => {
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
							<a href="#about" className="page-scroll">
								Quienes somos
							</a>
						</li>
						<li>
							<a href="#team" className="page-scroll">
								Equipo
							</a>
						</li>
						<li>
							<a href="#book" className="page-scroll">
								Reservar visita
							</a>
						</li>
						<li>
							<a href="#contact" className="page-scroll">
								Contacto
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
