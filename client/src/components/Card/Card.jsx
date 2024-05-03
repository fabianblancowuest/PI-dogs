import "./Card.css";

const Card = (props) => {
	return (
		<div className="card-container">
			<h3>{props.name}</h3>
			<img src={props.image.url}></img>
			<img src={props.image}></img>
			<h3>
				Weight: {props.weight.metric ? props.weight.metric : props.weight}
			</h3>
			<h3>
				Height: {props.height.metric ? props.height.metric : props.height}
			</h3>
		</div>
	);
};

export default Card;
