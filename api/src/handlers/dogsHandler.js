const {
	createDog,
	getDogs,
	dogUpdate,
	dogDelete,
	getDogById,
} = require("../controllers/dogsController");

// Create Dog
const createDogHandler = async (req, res) => {
	try {
		const { name, image, height, weight, life_span, temperament } = req.body;
		const response = await createDog(
			name,
			image,
			height,
			weight,
			life_span,
			temperament,
		);

		res.status(201).json(response);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Get Dog By Name
const getDogHandler = async (req, res) => {
	try {
		let { name } = req.query;
		const response = await getDogs(name);
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Get Dog By Id
const getDogByIdHandler = async (req, res) => {
	try {
		const { id } = req.params;
		const response = await getDogById(id);
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Update Dog
const putDogHandler = async (req, res) => {
	try {
		const { id } = req.params;
		const response = await dogUpdate(id, req.body);
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Delete Dog
const deleteDogHandler = async (req, res) => {
	try {
		const { id } = req.params;
		const response = await dogDelete(id);
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	createDogHandler,
	getDogHandler,
	getDogByIdHandler,
	putDogHandler,
	deleteDogHandler,
};
