import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { customerService } from "./customer.service";

const getCustomerFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await customerService.getCustomerFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

const getCustomerById = catchAsync(async (req, res) => {
  const result = await customerService.getCustomerById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer fetched successfully",
    data: result,
  });
});

const updateCustomer = catchAsync(async (req, res) => {
  const result = await customerService.updateCustomer(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});


const deleteCustomer = catchAsync(async (req, res) => {
  await customerService.deleteCustomer(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer deleted successfully",
    data: null,
  });
});

export const customerController = {
  getCustomerFromDB,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
