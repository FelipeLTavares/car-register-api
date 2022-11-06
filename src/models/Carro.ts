import Sequelize from "sequelize";
import { db } from "../db";

export const CarModel = db.define("carros", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  placa: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  marca: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  modelo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  anoFabricacao: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  anoModelo: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cambio: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
