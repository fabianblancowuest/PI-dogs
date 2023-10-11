import React from "react";
import Cards from "./../../components/Cards/Cards";

const Home = () => {
	const allDogs = [
		{ name: "Junior", height: "12-17", weight: "12-22" },
		{ name: "Camilo", height: "13-18", weight: "12-22" },
		{ name: "Coqui", height: "15-22", weight: "12-22" },
	];
	return (
		<div>
			<h1>Welcome to Home</h1>
			<Cards allDogs={allDogs}></Cards>
		</div>
	);
};

export default Home;
