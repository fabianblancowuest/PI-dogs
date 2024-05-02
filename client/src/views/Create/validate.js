const validate = (state) => {
	const errors = {};

	if (state.name === "") {
		errors.name = "Campo requerido";
	}
	if (state.height === "") {
		errors.height = "Campo requerido";
	}
	if (state.weight === "") {
		errors.weight = "Campo requerido";
	}

	// const temperaments = state.temperaments;
	// for (let i = 0; i < temperaments.length; i++) {
	// 	if (temperaments[i] === "-- Select an option --") {
	// 		errors.temperaments = "Campo requerido";
	// 	}
	// }

	return errors;
};

export { validate };
