import { useEffect, useRef, useState } from "react";
import { temperaments } from "./temperaments";
import { useDispatch } from "react-redux";
import { getTemperaments } from "../../redux/actions";

export const Create = () => {
	const validate = (state) => {
		const errors = {};
		if (state.name === "") {
			errors.name = "Campo requerido";
		}
		if (state.name === "") {
			errors.name = "Campo requerido";
		}
		if (state.name === "") {
			errors.name = "Campo requerido";
		}
		if (state.name === "") {
			errors.name = "Campo requerido";
		}
		if (state.name === "") {
			errors.name = "Campo requerido";
		}
		if (state.name === "") {
			errors.name = "Campo requerido";
		}

		return errors;
	};
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTemperaments());
	}, []);

	const initialState = {
		name: "",
		weight: "",
		height: "",
		temperaments: [],
		image: "",
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
		}
		setDogData({
			...dogData,
			[name]: value,
		});
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
			if (errors[error] === "") disabledAux = false;
			else {
				disabledAux = true;
				break;
			}
		}
		return disabledAux;
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
		console.log(dogData);
	};

	console.log("esto me devuelve", disabledFunction());

	return (
		<div className="create-container">
			<form className="create-form" onSubmit={handleSubmit}>
				<label htmlFor="">Name: </label>
				<input name="name" onChange={handleChange} type="text" />
				{errors.name && <p>{errors.name}</p>}

				<label htmlFor="">Height</label>
				<input name="height" onChange={handleChange} type="text" />

				<label htmlFor="">Weight</label>
				<input name="weight" onChange={handleChange} type="text" />

				<label htmlFor="">Temperaments</label>
				<select
					name="temperaments"
					id="temperaments"
					onChange={handleChange}
					ref={temperamentsRef}
				>
					{temperaments.map((temperament, index) => (
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
				<input type="submit" disabled={disabledFunction} value="Submit" />
			</form>
		</div>
	);
};
