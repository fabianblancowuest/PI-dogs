const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("temperament", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
