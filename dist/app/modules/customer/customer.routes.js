"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const user_controller_1 = require("../user/user.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const customer_validation_1 = require("./customer.validation");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(customer_validation_1.customerValidation.createCustomerZodSchema), user_controller_1.userController.createCustomer);
router.get("/", customer_controller_1.customerController.getCustomerFromDB);
router.get("/:id", customer_controller_1.customerController.getCustomerById);
router.put("/:id", (0, validateRequest_1.default)(customer_validation_1.customerValidation.updateCustomerZodSchema), customer_controller_1.customerController.updateCustomer);
router.delete("/:id", customer_controller_1.customerController.deleteCustomer);
exports.customerRoutes = router;
