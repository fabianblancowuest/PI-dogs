import PropTypes from "prop-types";
import React from "react";
import "./Card.css";

const Card = (props) => {
	return (
		<div className="card-container">
			<h3>Name: {props.name}</h3>
		</div>
	);
};

export default Card;
