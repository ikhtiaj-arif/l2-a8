import { create } from "domain";
import { UserRole } from "../../../../generated/prisma";
import prisma from "../../../shared/prisma";
import { ICustomer } from "../customer/customer.interface";

const createCustomer = async (payload: ICustomer) => {
  const userData = {
    email: payload.email,
    role: UserRole.USER,
  };

  //transaction-1 to create user intoDB
  const result = await prisma.$transaction(async (txClient) => {
    await txClient.user.create({
      data: userData,
    });

    const createCustomer = await txClient.customer.create({
      data: {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
      },
    });
    return createCustomer
  });

  return result;
};

export const userService = {
  createCustomer,
};
