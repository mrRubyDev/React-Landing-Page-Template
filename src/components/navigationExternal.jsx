import Logo from "../Basari.png";
export const NavigationExternal = () => {
	return (
		<nav id="menu" className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
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
