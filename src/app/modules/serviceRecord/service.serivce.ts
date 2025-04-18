import prisma from "../../../shared/prisma";
import { IServiceRecord } from "./service.interface";

const createService = async (
  payload: IServiceRecord
): Promise<IServiceRecord> => {
  // return payload

  const bikeId = payload.bikeId;

  await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId,
    },
  });

  const result = await prisma.serviceRecord.create({
    data: payload,
  });

  return result;
};

const getAllServices = async (): Promise<IServiceRecord[]> => {
  const result = await prisma.serviceRecord.findMany({});
  return result;
};
const getPendingServices = async () => {
  const date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  const result = await prisma.serviceRecord.findMany({
    where: {
      status: {
        in: ["pending", "in-progress"],
      },
      serviceDate: {
        lte: date,
      },
    },
  });

  return result;
};

const getServiceById = async (serviceId: string): Promise<IServiceRecord> => {
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId,
    },
  });
  return result;
};

const updateService = async (
  serviceId: string,
  payload: Partial<IServiceRecord> | undefined | null
): Promise<IServiceRecord> => {
  await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId,
    },
  });

  if (payload?.completionDate) {
    const result = await prisma.serviceRecord.update({
      where: {
        serviceId,
      },
      data: { completionDate: payload.completionDate, status: "done" },
    });
    return result;
  }
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId,
    },
    data: { completionDate: new Date().toISOString(), status: "done" },
  });
  return result;
};

export const serviceRecordService = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  getPendingServices,
};
