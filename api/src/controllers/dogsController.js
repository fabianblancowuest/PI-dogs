const { error } = require("console");
const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
const axios = require("axios");

const createDog = async (
	name,
	image,
	height,
	weight,
	life_span,
	temperament,
) => {
	const newDog = await Dog.create({
		name,
		image,
		height,
		weight,
		life_span,
	});

	if (!temperament.length) {
		throw new Error("El perro debe tener al menos un temperamento");
	}

	// Método para asociar un temperamento existente en la base de datos
	temperament.forEach(async (item) => {
		const temperamentsDB = await Temperament.findOne({
			where: {
				name: item,
			},
		});
		await newDog.addTemperaments(temperamentsDB);
	});

	// Método para crear un nuevo temperamento y asociarlo
	temperament.forEach(async (newTemperament) => {
		await newDog.createTemperament({
			temperament: newTemperament,
			DogId: newDog.id,
		});
	});
	return newDog;
};

const getDogsDB = async () => {
	const dogsDB = await Dog.findAll({
		include: {
			model: Temperament,
			attributes: ["name"],
			through: {
				attributes: [],
			},
		},
	});

	const estructuredIinfo = dogsDB.map((dog) => ({
		id: dog.id,
		name: dog.name,
		image: dog.image,
		height: dog.height,
		weight: dog.weight,
		life_span: dog.life_span,
		temperaments: dog.temperaments.map((temperament) => temperament.name),
	}));
	// return dogsDB;
	return estructuredIinfo;
};

const getDogsApi = async () => {
	const { data } = await axios.get(URL);
	return data;
};

const getDogs = async (name) => {
	const dogsDB = await getDogsDB();
	const dogApi = await getDogsApi();
	const allDogs = [...dogsDB, ...dogApi];

	if (name) {
		const filteredDog = allDogs.filter((dog) =>
			dog.name.toLowerCase().includes(name),
		);
		if (!filteredDog.length) {
			throw new Error(`No dog found with the name: ${name}`);
		}
		return filteredDog;
	}
	return allDogs;
};

const getDogById = async (id) => {
	// search from api
	const dogs = await getDogsApi();
	const dogById = dogs.find((dog) => dog.id === Number(id));

	// search from database
	if (id.length > 10) {
		const dogsDB = await getDogsDB();
		console.log(dogsDB);
		const dogDB = dogsDB.find((dog) => dog.id === id);

		return dogDB;
	}
	return dogById;
};

const dogUpdate = async (id, data) => {
	const dog = await Dog.update(data, {
		where: {
			id,
		},
	});

	return "Perro actualizado";
};

const dogDelete = async (id) => {
	const dog = await Dog.findOne({
		where: {
			id,
		},
	});
	return Dog.destroy({
		where: {
			id,
		},
	}).then((response) => {
		if (!response) {
			throw new Error("No se puedo eliminar el perro o no existe");
		}

		return `EL perro ${dog.name} ha sido eliminado correctamente`;
	});
};
module.exports = {
	createDog,
	getDogs,
	getDogById,
	dogUpdate,
	dogDelete,
};
