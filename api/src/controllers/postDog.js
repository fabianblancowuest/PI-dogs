const { Dog } = require("../db.js");

const postDog = async (req, res) => {
	try {
		const { name, image, height, weight, life_span } = req.body;

		if (!name || !image || !height || !weight || !life_span) {
			return res.status(400).json({ error: "Missing Data" });
		}

		const [dog, created] = await Dog.findOrCreate({
			where: { name },
			defaults: {
				name,
				image,
				height,
				weight,
				life_span,
			},
		});

		if (!created) {
			return res.status(400).json({ error: "This dog already exists" });
		}

		return res.json({ message: "Dog created succesfully" });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: "Error creating new dog" });
	}
};

module.exports = {
	postDog,
};
