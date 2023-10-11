// importar las action-types

import { GET_TEMPERAMENTS } from "./actions-types";

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
		default:
			return state;
	}
};

export default rootReducer;
