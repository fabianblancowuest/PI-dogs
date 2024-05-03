import "./Card.css";

const Card = (props) => {
	return (
		<div className="card-container">
			<h3>{props.name}</h3>
			<img src={props.image.url}></img>
			<h3>Weight: {props.weight.metric}</h3>
			<h3>Height: {props.height.metric}</h3>
		</div>
	);
};

export default Card;
