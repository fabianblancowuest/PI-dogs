// importar las action-types

import { POST_DOG, GET_TEMPERAMENTS, GET_DOGS } from "./actions-types";

// Inicializar el initial state
const initialState = {
	allDogs: [],
	allTemperaments: [],
	allRaces: [],
};

const rootReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_TEMPERAMENTS:
			return {
				...state,
				allTemperaments: payload,
			};
		case POST_DOG:
			return {
				...state,
			};
		case GET_DOGS:
			return {
				...state,
				allDogs: payload,
			};
		default:
			return state;
	}
};

export default rootReducer;
