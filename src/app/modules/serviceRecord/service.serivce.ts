import prisma from "../../../shared/prisma";
import { IServiceRecord } from "./service.interface";

const createService = async (payload: IServiceRecord): Promise<IServiceRecord> => {
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
  payload: Partial<IServiceRecord>
): Promise<IServiceRecord> => {
  await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId,
    },
  });

  if (!payload.completionDate) {
    throw new Error("Completion date is required");
  }
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId,
    },
    data: { completionDate: payload.completionDate, status: "done" },
  });
  return result;
};

export const serviceRecordService = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
};
