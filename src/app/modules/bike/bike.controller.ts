import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { bikeService } from "./bike.service";

const createBike = catchAsync(async (req, res) => {
  const result = await bikeService.createBike(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Bike created successfully",
    data: result,
  });
});

const getAllBikes = catchAsync(async (req, res) => {
  const result = await bikeService.getAllBikes();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

const getOneBike = catchAsync(async (req, res) => {
  const result = await bikeService.getBikeById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike fetched successfully",
    data: result,
  });
});

export const bikeController = {
  createBike,
  getAllBikes,
  getOneBike,
};
