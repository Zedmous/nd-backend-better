const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db.config");

class PlanModel extends Model {}

PlanModel.init(
  {
    nombre: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.DECIMAL,
    },
    caracteristicas: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: "plan",
    timestamps: false
  }
);

module.exports = PlanModel