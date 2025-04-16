import { Request, Response } from "express";
import { customerService } from "./customer.service";

const getCustomerFromDB = async (req: Request, res: Response) => {
  const result = await customerService.getCustomerFromDB();
  res.send({ result });
};

export const customerController = {
  getCustomerFromDB,
};
