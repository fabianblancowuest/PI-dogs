import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ allDogs }) => {
	return (
		<div className="cards-container">
			{allDogs.map((dog) => (
				<Card name={dog.name} height={dog.height} weight={dog.weight}></Card>
			))}
		</div>
	);
};

export default Cards;
