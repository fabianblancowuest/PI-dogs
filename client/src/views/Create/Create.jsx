import { useEffect, useRef, useState } from "react";
import "./Create.css";
import { validate } from "./validate";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postHero } from "../../redux/actions";

const Create = () => {
	const dispatch = useDispatch();

	const allTemperaments = useSelector((state) => state.allTemperaments);

	useEffect(() => {
		dispatch(getTemperaments());
	}, []);

	const initialState = {
		name: "",
		image: "",
		height: "",
		weight: "",
		life_span: "15-20",
		temperaments: [],
	};

	const temperamentsRef = useRef();
	const [dogData, setDogData] = useState(initialState);
	const [errors, setErrors] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (value === "Select an option") return;
		if (name === "temperaments") {
			setDogData({
				...dogData,
				temperaments: [
					...dogData.temperaments,
					// document.getElementById("temperaments").value,
					value,
				],
			});
		} else {
			setDogData({
				...dogData,
				[name]: value,
			});
		}

		setErrors(
			validate({
				...dogData,
				[name]: value,
			}),
		);
	};

	const disabledFunction = () => {
		let disabledAux = true;
		for (const error in errors) {
			if (errors[error] === "") {
				disabledAux = false;
			} else {
				disabledAux = true;
				break;
			}
		}
		return disabledAux;
	};

	const removeTemperament = (index) => {
		setDogData({
			...dogData,
			temperaments: dogData.temperaments.filter((_, i) => i !== index),
		});
	};

	const handleAddTemperament = () => {
		const value = temperamentsRef.current.value;
		if (
			value !== "-- Select an option --" &&
			!dogData.temperaments.includes(value)
		) {
			setDogData({
				...dogData,
				temperaments: [...dogData.temperaments, value],
			});
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(postHero(dogData));
		console.log(dogData);
	};

	console.log("esto me devuelve", disabledFunction());
	console.log("estado dogData temperaments", dogData.temperaments);
	console.log(dogData);
	console.log(removeTemperament);

	return (
		<div className="create-container">
			<form className="create-form" onSubmit={handleSubmit}>
				<label htmlFor="">Name: </label>
				<input name="name" onChange={handleChange} type="text" />
				{errors.name && <p className="errors">{errors.name}</p>}

				<label htmlFor="">Height</label>
				<input name="height" onChange={handleChange} type="text" />
				{errors.height && <p className="errors">{errors.height}</p>}

				<label htmlFor="">Weight</label>
				<input name="weight" onChange={handleChange} type="text" />
				{errors.weight && <p className="errors">{errors.weight}</p>}

				<label htmlFor="">Temperaments</label>
				<select
					name="temperaments"
					id="temperaments"
					onChange={handleChange}
					ref={temperamentsRef}
				>
					{allTemperaments.map((temperament, index) => (
						<option key={index} value={temperament}>
							{temperament}
						</option>
					))}
				</select>
				<button
					name="temperaments"
					type="button"
					onClick={handleAddTemperament}
				>
					Add
				</button>
				{/* <div>
					{dogData.temperaments.length &&
						dogData.temperaments.map((temperament, index) => (
							<p key={index} onClick={() => removeTemperament(index)}>
								{temperament}
							</p>
						))}
				</div> */}
				{errors.temperaments && <p>{errors.temperaments}</p>}
				<input type="submit" disabled={disabledFunction} value="Submit" />
			</form>
		</div>
	);
};

export default Create;
