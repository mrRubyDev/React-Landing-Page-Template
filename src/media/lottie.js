import React from "react";
import Lottie from "react-lottie";

export default function LottieAnimation({ lotti, width, height , loop}) {
	const defaultOptions = {
		loop: loop ? true: false,
		animationData: lotti,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div>
			<Lottie options={defaultOptions} height={height} width={width} />
		</div>
	);
}
