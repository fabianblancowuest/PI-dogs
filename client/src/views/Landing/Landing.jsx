import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
	return (
		<div>
			<h1>Landing Page</h1>
			<NavLink to="/home">
				<h2>Home</h2>
			</NavLink>
		</div>
	);
};

export default Landing;
