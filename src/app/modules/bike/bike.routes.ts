import express from "express";

import { bikeController } from "./bike.controller";
import validateRequest from "../../middlewares/validateRequest";
import { bikeValidation } from "./bike.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(bikeValidation.createBikeZodSchema),
  bikeController.createBike
);
router.get("/", bikeController.getAllBikes);
router.get("/:id", bikeController.getOneBike);

// router.put("/:id", customerController.updateCustomer);
// router.delete("/:id", customerController.deleteCustomer);

export const bikeRoutes = router;
