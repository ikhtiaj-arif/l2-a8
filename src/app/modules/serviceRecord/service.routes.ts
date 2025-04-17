import express from "express";
import { serviceController } from "./service.controller";

const router = express.Router();

router.post("/", serviceController.createServiceRecord);

router.get("/", serviceController.getAllServices);
router.get("/:id", serviceController.getOneService);

router.put("/:id", serviceController.updateService);
// router.delete("/:id", customerController.deleteCustomer);

export const serviceRecordRoutes = router;
