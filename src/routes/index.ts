import { Router } from "express";
import router from "./routes";

const routes = Router();

routes.use("/", router);

export default routes;
