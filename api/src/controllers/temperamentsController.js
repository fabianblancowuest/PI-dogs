const { Temperament } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

const getAllTemperamentsDB = async () => {
	const temperamentsDB = await Temperament.findAll();
	if (!temperamentsDB.length) {
		const { data } = await axios.get(URL);
		const uniqueTemperaments = new Set();
		data.forEach((dog) => {
			const temperaments = dog.temperament ? dog.temperament.split(", ") : [];
			temperaments.forEach((temperament) =>
				uniqueTemperaments.add(temperament),
			);
		});
		const uniqueTemperamentsArray = [...uniqueTemperaments];
		uniqueTemperamentsArray.forEach(async (temperament) => {
			await Temperament.findOrCreate({
				where: { name: temperament },
			});
		});
		return uniqueTemperamentsArray;
	}
	return temperamentsDB.map((temperament) => temperament.name);
};

module.exports = {
	getAllTemperamentsDB,
};
