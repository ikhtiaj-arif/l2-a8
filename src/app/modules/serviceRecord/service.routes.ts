import express from "express";
import { serviceController } from "./service.controller";
import { serviceRecordValidation } from "./service.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.post("/", validateRequest(serviceRecordValidation.createServiceRecordZodSchema), serviceController.createServiceRecord);

router.get("/", serviceController.getAllServices);
router.get("/:id", serviceController.getOneService);

router.put("/:id/complete",validateRequest(serviceRecordValidation.updateServiceRecordZodSchema), serviceController.updateService);
// router.delete("/:id", customerController.deleteCustomer);

export const serviceRecordRoutes = router;
