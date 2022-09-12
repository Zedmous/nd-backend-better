const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db.config");

class ClienteModel extends Model {}

ClienteModel.init(
  {
    img: {
      type: DataTypes.BLOB,
    },
    titulo: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: "cliente",
    timestamps: false
  }
);

module.exports = ClienteModel