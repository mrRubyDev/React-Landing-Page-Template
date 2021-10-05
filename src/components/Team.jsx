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
