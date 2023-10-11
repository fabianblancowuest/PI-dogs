import axios from "axios";
import { GET_TEMPERAMENTS } from "./actions-types";

const getTemperaments = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				"http://localhost:3001/dogs/temperaments",
			);
			dispatch({
				type: GET_TEMPERAMENTS,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

const postHero = (state) => {
	return async (dispatch) => {
		try {
			await axios.post("http://localhost:3001/dogs", state);
		} catch (error) {
			console.log(error);
		}
	};
};

export { getTemperaments, postHero };
