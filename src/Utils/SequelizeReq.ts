import { Request, Response } from "express";
import { CarModel } from "../models/Carro";
import { CarroFilter, SequelizeFilter, UpdateData } from "../Interfaces";
import { Op } from "sequelize";
import { generateFilter1, generateFilter2 } from ".";

export const GetAll = async () => {
  const Carros = await CarModel.findAll();
  return Carros;
};

export const FilterCars = async (filter: CarroFilter) => {
  const raw = filter;
  const stringProperties = generateFilter1(raw);
  const numericProperties = generateFilter2(raw);

  const Carros = await CarModel.findAll({
    where: {
      ...stringProperties,
      anoModelo: {
        [Op.between]: numericProperties.anoModelo,
      },
      anoFabricacao: {
        [Op.between]: numericProperties.anoFabricacao,
      },
    },
  });

  return Carros;
};
