import React from "react";
import Linkedin from "../linkedin.png";

export default function TeamCard({ member }) {
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
		<div style={card}>
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
			{member.linkedin && (
				<div style={{ height: "2rem", width: "2rem", marginBottom: "1rem" }}>
					<a href={member.linkedin} target="_blank" rel="noreferrer">
						<img
							src={Linkedin}
							alt="Linkedin"
							style={{ height: "100%", width: "100%" }}
						/>
					</a>
				</div>
			)}
		</div>
	);
}
