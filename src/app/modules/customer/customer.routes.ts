import express from "express";
import { customerController } from "./customer.controller";

const router = express.Router();

router.get("/", customerController.getCustomerFromDB);

export const customerRoutes = router;
