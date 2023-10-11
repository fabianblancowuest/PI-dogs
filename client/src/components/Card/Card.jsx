import PropTypes from "prop-types";
import React from "react";
import "./Card.css";

const Card = (props) => {
	const { name, image, height, weight, life_span, temperament } = props;
	return (
		<div className="card-container">
			<h3>Name: {name}</h3>
			<h3>Height: {height}</h3>
			<h3>Weight: {weight}</h3>
		</div>
	);
};

export default Card;
