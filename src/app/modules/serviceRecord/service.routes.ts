import express from "express";
import { serviceController } from "./service.controller";
import { serviceRecordValidation } from "./service.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.post("/", validateRequest(serviceRecordValidation.createServiceRecordZodSchema), serviceController.createServiceRecord);

router.get("/status", serviceController.getPendingServices);
router.get("/", serviceController.getAllServices);
router.put("/:id/complete", serviceController.updateService);
router.get("/:id", serviceController.getOneService);

// router.delete("/:id", customerController.deleteCustomer);

export const serviceRecordRoutes = router;
