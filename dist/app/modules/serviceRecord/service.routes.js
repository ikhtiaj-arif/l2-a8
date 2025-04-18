"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecordRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const service_validation_1 = require("./service.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(service_validation_1.serviceRecordValidation.createServiceRecordZodSchema), service_controller_1.serviceController.createServiceRecord);
router.get("/status", service_controller_1.serviceController.getPendingServices);
router.get("/", service_controller_1.serviceController.getAllServices);
router.put("/:id/complete", service_controller_1.serviceController.updateService);
router.get("/:id", service_controller_1.serviceController.getOneService);
// router.delete("/:id", customerController.deleteCustomer);
exports.serviceRecordRoutes = router;
