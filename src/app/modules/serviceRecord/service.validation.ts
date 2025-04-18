import { z } from "zod";

const createServiceRecordZodSchema = z.object({
  body: z.object({
    bikeId: z.string(),
    serviceDate: z.string(),
    completionDate: z.string().optional(),
    description: z.string(),
    status: z.string(),
  }),
});

const updateServiceRecordZodSchema = z.object({
  body: z.object({
    completionDate: z.string().optional(),
  }),
});

export const serviceRecordValidation = {
  createServiceRecordZodSchema,
  updateServiceRecordZodSchema,
};
