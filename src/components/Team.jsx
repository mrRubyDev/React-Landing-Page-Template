export const Team = props => {
	const card = {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		border: "1px solid lightgrey",
	};
	const imgContainer = {
		width: "100%",
		height: "45%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};
	const img = {
		height: "150px",
		width: "150px",
		borderRadius: "50%",
		border: "0.4px solid lightgrey",
		padding: ".5rem",
	};

	const textContainer = {
		width: "90%",
		height: "50%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marignTop: "5%",
	};

	const name = {
		fontSize: "20px",
		color: "#0275d8",
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
			id="team"
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
				<h2>Conoce al equipo</h2>
				<p>
					Un equipo en el que puedes confiar, con los mejores profesionales del
					sector.
				</p>
			</div>

			<div
				style={{
					width: "60%",
					display: "grid",
					gridAutoRows: "minMax(380px, auto)",
					gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
					gap: "10px",
				}}
			>
				{props.data
					? props.data.map((member, i) => (
							<div style={card} key={i}>
								<div style={imgContainer}>
									<img
										src="https://bootdey.com/img/Content/avatar/avatar7.png"
										alt="avatar"
										style={img}
									></img>
								</div>
								<div style={textContainer}>
									<h4 style={name}>{member.name}</h4>
									<p
										style={{
											fontSize: "16px",
											padding: "1rem",
											textAlign: "center",
										}}
									>
										{member.job}
									</p>
								</div>
							</div>
					  ))
					: "Loading..."}
			</div>
		</div>
	);
};

// <div class="row text-center">
// 					{props.data
// 						? props.data.map((d, i) => (
// 								<div
// 									class="col-xl-3 col-sm-6 mb-5"
// 									key={`${d.name}-${i}`}
// 									style={{ backgroundColor: "blue" }}
// 								>
// 									<div class="bg-white rounded shadow-sm py-5 px-4">
// 										<img
// 											src="https://bootdey.com/img/Content/avatar/avatar7.png"
// 											alt=""
// 											width="100"
// 											class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
// 										></img>
// 										<h5 class="mb-0">Manuella Nevoresky</h5>
// 										<span class="small text-uppercase text-muted">
// 											CEO - Founder
// 										</span>
// 										<ul class="social mb-0 list-inline mt-3">
// 											<li class="list-inline-item">
// 												<a href="linkedin" class="social-link">
// 													<i class="fa fa-linkedin"></i>
// 												</a>
// 											</li>
// 										</ul>
// 									</div>
// 								</div>
// 						  ))
// 						: "loading"}
// 				</div>
// 			</div>
// 		</div>
