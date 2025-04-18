"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecordValidation = void 0;
const zod_1 = require("zod");
const createServiceRecordZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string(),
        serviceDate: zod_1.z.string(),
        completionDate: zod_1.z.string().optional(),
        description: zod_1.z.string(),
        status: zod_1.z.string(),
    }),
});
const updateServiceRecordZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        completionDate: zod_1.z.string().optional(),
    }),
});
exports.serviceRecordValidation = {
    createServiceRecordZodSchema,
    updateServiceRecordZodSchema,
};
