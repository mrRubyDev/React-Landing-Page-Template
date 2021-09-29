export const About = props => {
	return (
		<div id="about">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-6">
						{" "}
						<img
							src="img/team/doctor-team.jpeg"
							className="img-responsive"
							alt=""
						/>{" "}
					</div>
					<div className="col-xs-12 col-md-6">
						<div className="about-text">
							<h2>Sobre nosotros</h2>
							<p>{props.data ? props.data.paragraph : "loading..."}</p>
							<p>{props.data && props.data.paragraph1}</p>
							<p>{props.data && props.data.paragraph2}</p>
							{/* <h3>Por qué confiar en nosotros?</h3>
							<div className="list-style">
								<div className="col-lg-6 col-sm-6 col-xs-12">
									<ul>
										{props.data
											? props.data.Why.map((d, i) => (
													<li key={`${d}-${i}`}>{d}</li>
											  ))
											: "loading"}
									</ul>
								</div>
								<div className="col-lg-6 col-sm-6 col-xs-12">
									<ul>
										{props.data
											? props.data.Why2.map((d, i) => (
													<li key={`${d}-${i}`}> {d}</li>
											  ))
											: "loading"}
									</ul>
								</div>
							</div> */}
						</div>
					</div>
				</div>

				<p>{props.data && props.data.paragraph3}</p>
				<p>{props.data && props.data.paragraph4}</p>
				<p>{props.data && props.data.paragraph5}</p>
				<p>{props.data && props.data.paragraph6}</p>
				<p>{props.data && props.data.paragraph7}</p>
			</div>
		</div>
	);
};
