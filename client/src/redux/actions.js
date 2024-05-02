import axios from "axios";
import { POST_DOG, GET_DOGS, GET_TEMPERAMENTS } from "./actions-types";

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

const postDog = (state) => {
	return async (dispatch) => {
		try {
			// const { data } = await axios.post("http://localhost:3001/dogs/", state);
			await axios.post("http://localhost:3001/dogs/post", state);

			alert("Perro creado con éxito");
		} catch (error) {
			console.log(error);
			alert(error.response.data.error);
		}
	};
};

const getDogs = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get("http://localhost:3001/dogs");
			dispatch({
				type: GET_DOGS,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export { getTemperaments, postDog, getDogs };
