import express from "express";
import { customerController } from "./customer.controller";
import { userController } from "../user/user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { customerValidation } from "./customer.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(customerValidation.createCustomerZodSchema),
  userController.createCustomer
);
router.get("/", customerController.getCustomerFromDB);
router.get("/:id", customerController.getCustomerById);

router.put(
  "/:id",
  validateRequest(customerValidation.updateCustomerZodSchema),
  customerController.updateCustomer
);
router.delete("/:id", customerController.deleteCustomer);

export const customerRoutes = router;
