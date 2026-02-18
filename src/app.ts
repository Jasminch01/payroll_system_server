import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app: Application = express();

app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("payroll system online");
});

export default app;
