import prisma from "../../../shared/prisma";
import { IBike } from "./bike.interface";

const createBike = async (payload: IBike): Promise<IBike> => {
  const customerId = payload.customerId;

  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId,
    },
  });

  const result = await prisma.bike.create({
    data: payload,
  });

  return result;
};

const getAllBikes = async ():Promise<IBike[]> => {
  const result = await prisma.bike.findMany({});
  return result;
};

const getBikeById = async (bikeId: string):Promise<IBike> => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId,
    },
  });
  return result;
};

export const bikeService = {
  createBike,
  getAllBikes,
  getBikeById,
};
