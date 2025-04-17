import { z } from "zod";

const createCustomerZodSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
  }),
});

const updateCustomerZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    phone: z.string().optional(),
  }),
});

export const customerValidation = {
  createCustomerZodSchema,
  updateCustomerZodSchema,
};
