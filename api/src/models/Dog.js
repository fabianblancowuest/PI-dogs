const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("dog", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			unique: true,
			defaultValue: DataTypes.UUIDV4,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "imagen por defecto",
		},
		height: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		weight: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		life_span: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};
