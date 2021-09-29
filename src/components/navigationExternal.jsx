import Logo from "../Basari.png";
export const NavigationExternal = props => {
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
					<a className="navbar-brand page-scroll" href="/">
						<img
							src={Logo}
							style={{ height: "100%", width: "100%", objectFit: "cover" }}
							alt="Basari"
						/>
					</a>{" "}
				</div>
			</div>
		</nav>
	);
};
