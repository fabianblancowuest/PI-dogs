import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import "./Cards.css";
import { getDogs } from "../../redux/actions";
import { useEffect } from "react";

const Cards = ({ allDogs }) => {
	const dispatch = useDispatch();
	const dogs = useSelector((state) => state.allDogs);
	const temperaments = useSelector((state) => state.allTemperaments);
	console.log("dogs\n", dogs);
	console.log("temperaments\n", temperaments);
	const handleGetDogs = () => {
		dispatch(getDogs());
		console.log(dogs);
	};

	useEffect(() => {
		console.log("Updated dogs:", dogs);
	}, [dogs]);

	return (
		<div className="cards-container">
			<button onClick={handleGetDogs}>Get Dogs</button>
			{dogs.map((dog, index) => (
				<Card
					key={index}
					name={dog.name}
					height={dog.height}
					weight={dog.weight}
				></Card>
			))}
		</div>
	);
};

export default Cards;
