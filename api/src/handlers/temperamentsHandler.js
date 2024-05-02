const {
	getAllTemperamentsDB,
} = require("../controllers/temperamentsController");

// Get Temperaments
const getTemperamentsHandler = async (req, res) => {
	try {
		const response = await getAllTemperamentsDB();
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	getTemperamentsHandler,
};
