const { Dog } = require("../db");

const getDogDetail = async (req, res) => {
	try {
		const { id } = req.params;

		const dog = await Dog.findOne({
			where: {
				id,
			},
		});

		if (!dog) {
			return res.status(404).json({ error: "Dog not found" });
		}

		return res.json({ dog });
	} catch (error) {
		console.log(error);

		return res.status(500).json({ error: "Error in obtaining dog details" });
	}
};

module.exports = {
	getDogDetail,
};
