import { Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";


const getCustomerFromDB =  async () => {
    const result = await prisma.customer.findMany({});
    return result
}

export const customerService = {
    getCustomerFromDB
}   