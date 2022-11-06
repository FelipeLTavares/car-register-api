import { Router } from "express";
import {
  CreateNewRegister,
  GetAllRegisters,
  GetEspecificRegisters,
  UpdateRegister,
  DeleteRegister,
} from "../Controllers/HandleRegisters";

const router = Router();

//GET ALL
router.get("/", GetAllRegisters);
//GET SOME
router.post("/filter", GetEspecificRegisters);
//CREATE
router.post("/", CreateNewRegister);
//UPDATE
router.put("/", UpdateRegister);
//DELETE
router.delete("/", DeleteRegister);

export default router;
