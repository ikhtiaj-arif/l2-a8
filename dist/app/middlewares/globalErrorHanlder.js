"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const zod_1 = require("zod");
const globalErrorHandler = (err, req, res, next) => {
    var _a;
    const service = ((_a = err === null || err === void 0 ? void 0 : err.meta) === null || _a === void 0 ? void 0 : _a.modelName) || "Service";
    let stack = process.env.STATUS === "development"
        ? err.stack
        : "Optional stack trace shown only in development";
    let message;
    let statusCode;
    if (err instanceof zod_1.ZodError) {
        message = "Validation error",
            statusCode = http_status_1.default.BAD_REQUEST;
    }
    else if (err.code === "P2002") {
        res.status(http_status_1.default.CONFLICT).json({
            success: false,
            status: http_status_1.default.CONFLICT,
            message: `${service} already exists`,
            stack: stack,
        });
    }
    else if (err.code === "P2003") {
        res.status(http_status_1.default.NOT_FOUND).json({
            success: false,
            status: http_status_1.default.NOT_FOUND,
            message: `${service} not found`,
            stack: stack,
        });
    }
    else if (err.code === "P2025") {
        res.status(http_status_1.default.NOT_FOUND).json({
            success: false,
            status: http_status_1.default.NOT_FOUND,
            message: `${service} not found`,
            stack: stack,
        });
    }
    else {
        res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({
            success: false,
            status: http_status_1.default.INTERNAL_SERVER_ERROR,
            message: err.message || "Something went wrong",
            error: err,
        });
    }
};
exports.default = globalErrorHandler;
