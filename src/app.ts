import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { customerRoutes } from "./app/modules/customer/customer.routes";

import httpStatus from "http-status";
import { bikeRoutes } from "./app/modules/bike/bike.routes";
import { serviceRecordRoutes } from "./app/modules/serviceRecord/service.routes";
import globalErrorHandler from "./app/middlewares/globalErrorHanlder";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});


app.use("/api/customers", customerRoutes);
app.use("/api/bikes", bikeRoutes);
app.use("/api/services", serviceRecordRoutes);

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
});

export default app;
