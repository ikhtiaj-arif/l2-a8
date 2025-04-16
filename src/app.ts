import cors from "cors";
import express, { Application, Request, Response } from "express";
import { userRoutes } from "./app/modules/user/user.routes";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/api/customers", userRoutes );

export default app;
