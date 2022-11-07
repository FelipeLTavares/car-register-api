import { db } from "../db";
import { Request, Response } from "express";
import { CarModel } from "../models/Carro";
import { UpdateData } from "../Interfaces";
import { PrepareCreateData, prepareUpdateData } from "../Utils";
import { FilterCars, GetAll } from "../Utils/SequelizeReq";

//GET
////ALL
export const GetAllRegisters = async (req: Request, res: Response) => {
  return res.json("Olá");
  try {
    const Cars = await GetAll();
    res.status(200).json(Cars);
  } catch {
    return res.status(502);
  }
};

////FILTER
export const GetEspecificRegisters = async (req: Request, res: Response) => {
  try {
    const Filter = req.body;
    const Cars = await FilterCars(Filter);
    return res.status(200).json(Cars);
  } catch {
    return res.status(502);
  }
};

//CREATE
export const CreateNewRegister = async (req: Request, res: Response) => {
  const CarData = req.body;
  const ExistingRecords = await FilterCars(CarData);
  if (ExistingRecords.length !== 0) {
    return res.status(400).json({ message: "Car already registered!" });
  }

  const readyData = PrepareCreateData(CarData);
  try {
    await db.sync();
    await CarModel.create(readyData).then();
    return res.status(201).json();
  } catch (err) {
    return res.json(err);
  }
};

//UPDATE
export const UpdateRegister = async (req: Request, res: Response) => {
  try {
    const ChangesData: UpdateData = req.body.changes;
    const CarId = Number(req.body.id);
    const Changes = prepareUpdateData(ChangesData);
    await db.sync();
    await CarModel.update(Changes, {
      where: {
        id: CarId,
      },
    }).then(async () => {
      const Cars = await GetAll();
      res.status(200).json(Cars);
    });
  } catch (err) {
    return res.json(err);
  }
};

//DELETE
export async function DeleteRegister(req: Request, res: Response) {
  const RegisterId = req.body.id;
  try {
    await db.sync();
    await CarModel.destroy({
      where: {
        id: RegisterId,
      },
    }).then(async () => {
      const Cars = await GetAll();
      res.status(200).json(Cars);
    });
  } catch (err) {
    return res.json(err);
  }
}
