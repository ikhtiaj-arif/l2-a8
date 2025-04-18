"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerValidation = void 0;
const zod_1 = require("zod");
const createCustomerZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string(),
        phone: zod_1.z.string(),
    }),
});
const updateCustomerZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        phone: zod_1.z.string().optional(),
    }),
});
exports.customerValidation = {
    createCustomerZodSchema,
    updateCustomerZodSchema,
};
