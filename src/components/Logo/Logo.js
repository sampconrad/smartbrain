import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
	return (
		<div className="center ma4 mt3">
			<Tilt
				tiltMaxAngleX={40}
				tiltMaxAngleY={40}
				perspective={800}
				transitionSpeed={2500}
				scale={1.4}
				gyroscope={true}
				tiltAngleXInitial={20}
				tiltAngleYInitial={20}
				className="back-logo"
			>
				<img src={brain} className="front-logo" alt="logo" />
			</Tilt>
		</div>
	);
};

export default Logo;
