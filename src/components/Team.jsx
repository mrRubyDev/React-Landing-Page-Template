import TeamCard from "./TeamCard";
export const Team = props => {
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
					? props.data.map((member, i) => <TeamCard member={member} key={i} />)
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
