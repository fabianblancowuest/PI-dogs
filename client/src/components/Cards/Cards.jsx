import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import "./Cards.css";
import { getDogs } from "../../redux/actions";
import { useEffect } from "react";

const Cards = ({ allDogs }) => {
	const dispatch = useDispatch();
	const dogs = useSelector((state) => state.allDogs);
	// const temperaments = useSelector((state) => state.allTemperaments);
	const handleGetDogs = () => {
		dispatch(getDogs());
	};

	// useEffect(() => {
	// 	console.log("Updated dogs:", dogs);
	// }, [dogs]);

	return (
		<div className="cards-container">
			<div>
				<button onClick={handleGetDogs}>Get Dogs</button>
			</div>
			<div className="dogs-container">
				{dogs.map((dog, index) => (
					<Card
						key={index}
						name={dog.name}
						height={dog.height}
						weight={dog.weight}
						image={dog.image}
					></Card>
				))}
			</div>
		</div>
	);
};

export default Cards;
