import prisma from "../../../shared/prisma";
import { ICustomer } from "./customer.interface";

const getCustomerFromDB = async (): Promise<ICustomer[]> => {
  const result = await prisma.customer.findMany({});
  return result;
};

const getCustomerById = async (customerId: string): Promise<ICustomer> => {
  const result = prisma.customer.findUniqueOrThrow({
    where: {
      customerId,
    },
  });

  return result;
};

const updateCustomer = async (
  customerId: string,
  payload: Partial<ICustomer>
): Promise<ICustomer> => {
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

const deleteCustomer = async (
  customerId: string
): Promise<ICustomer | null> => {
  const deletedCustomer = await prisma.customer.findUniqueOrThrow({
    where: { customerId },
  });
  console.log(deletedCustomer);
  //transaction
  const result = await prisma.$transaction(async (txClient) => {
    const deletedCustomer = await txClient.customer.delete({
      where: {
        customerId,
      },
    });

    await txClient.user.delete({
      where: {
        email: deletedCustomer.email,
      },
    });

    return deletedCustomer;
  });
  return result;
};

export const customerService = {
  getCustomerFromDB,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
