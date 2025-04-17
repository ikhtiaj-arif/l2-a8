import express from "express";
import { customerController } from "./customer.controller";
import { userController } from "../user/user.controller";

const router = express.Router();

router.post("/", userController.createCustomer);
router.get("/", customerController.getCustomerFromDB);
router.get("/:id", customerController.getCustomerById);

router.put("/:id", customerController.updateCustomer);

export const customerRoutes = router;
