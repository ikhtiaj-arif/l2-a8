"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const customer_routes_1 = require("./app/modules/customer/customer.routes");
const http_status_1 = __importDefault(require("http-status"));
const bike_routes_1 = require("./app/modules/bike/bike.routes");
const service_routes_1 = require("./app/modules/serviceRecord/service.routes");
const globalErrorHanlder_1 = __importDefault(require("./app/middlewares/globalErrorHanlder"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/api/customers", customer_routes_1.customerRoutes);
app.use("/api/bikes", bike_routes_1.bikeRoutes);
app.use("/api/services", service_routes_1.serviceRecordRoutes);
app.use(globalErrorHanlder_1.default);
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "Not Found",
        errorMessages: [
            {
                path: req.originalUrl,
                message: "API Not Found",
            },
        ],
    });
});
exports.default = app;
