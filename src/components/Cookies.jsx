import React from "react";
import Footer from "./Footer";
import { NavigationExternal } from "./NavigationExternal";

export default function Cookies() {
	return (
		<div style={{ minHeight: "100vh" }}>
			<NavigationExternal />
			<div className="overlay">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2 intro-text">
							<a href="#about" className="btn btn-custom btn-lg page-scroll">
								Cookies
							</a>{" "}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
