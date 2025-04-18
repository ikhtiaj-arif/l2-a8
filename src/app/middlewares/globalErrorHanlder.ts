import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ZodEffects, ZodError } from "zod";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
const service = err?.meta?.modelName || "Service";
  let stack =
    process.env.STATUS === "development"
      ? err.stack
      : "Optional stack trace shown only in development";
    let message;
    let statusCode;

  if (err instanceof ZodError) {
    message= "Validation error",
    statusCode = httpStatus.BAD_REQUEST;
 
  } else if (err.code === "P2002") {

    res.status(httpStatus.CONFLICT).json({
      success: false,
      status: httpStatus.CONFLICT,
      message:`${service} already exists`,
      stack: stack,
    });
  } else if (err.code === "P2003") {

    res.status(httpStatus.NOT_FOUND).json({
      success: false,
      status: httpStatus.NOT_FOUND,
      message:`${service} not found`,
      stack: stack,
    });
  } else if (err.code === "P2025") {
    res.status(httpStatus.NOT_FOUND).json({
      success: false,
      status: httpStatus.NOT_FOUND,
      message: `${service} not found`,
      stack: stack,
    });
  } else {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
  
};

export default globalErrorHandler;
