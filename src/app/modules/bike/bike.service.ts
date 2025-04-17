import prisma from "../../../shared/prisma";

const createBike = async (payload: any) => {
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

const getAllBikes = async () => {
  const result = await prisma.bike.findMany({});
  return result;
};

const getBikeById = async (bikeId: string) => {
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
