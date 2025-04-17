import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { serviceRecordService } from "./service.serivce";


const createServiceRecord = catchAsync(async (req, res) => {
 
    const result = await serviceRecordService.createService(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Service created successfully",
      data: result,
    });

});

const getAllServices = catchAsync(async (req, res) => {

    const result = await serviceRecordService.getAllServices();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Services fetched successfully",
      data: result,
    });
 
});

const getOneService = catchAsync(async (req, res) => {
 
    const result = await serviceRecordService.getServiceById(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service fetched successfully",
      data: result,
    });
 
});


const updateService = catchAsync(async (req, res) => {
 
    const result = await serviceRecordService.updateService(req.params.id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service updated successfully",
      data: result,
    });
 
});

export const serviceController = {
  createServiceRecord,
  getAllServices,
  getOneService,updateService
};
