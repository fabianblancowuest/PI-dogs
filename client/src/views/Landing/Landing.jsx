import React from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
	return (
		<div className="landing">
			<h1>Landing Page</h1>
			<NavLink to="/home">
				<h2>Home</h2>
			</NavLink>
		</div>
	);
};

export default Landing;
