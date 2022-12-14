import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 8080, () => console.log("SERVER AT 8080"));
