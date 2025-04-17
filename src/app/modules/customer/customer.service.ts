import { Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getCustomerFromDB = async () => {
  const result = await prisma.customer.findMany({});
  return result;
};

const getCustomerById = async (customerId: string) => {
  const result = prisma.customer.findUniqueOrThrow({
    where: {
      customerId,
    },
  });

  return result;
};

const updateCustomer = async (customerId: string, payload: any) => {
  await prisma.customer.findUniqueOrThrow({
    where: { customerId },
  });

  const result = prisma.customer.update({
    where: {
      customerId,
    },
    data: payload,
  });

  return result;
};

export const customerService = {
  getCustomerFromDB,
  getCustomerById,
  updateCustomer,
};
