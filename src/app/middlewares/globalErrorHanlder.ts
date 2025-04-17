import { NextFunction, Request, Response } from "express";
import { stat } from "fs";
import httpStatus from "http-status";
import { ZodEffects, ZodError } from "zod";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let stack =
    process.env.STATUS === "development"
      ? err.stack
      : "Optional stack trace shown only in development";
  let message;
  let statusCode = 500;

  if (err instanceof ZodError) {
    (message = "Validation error"), (statusCode = httpStatus.BAD_REQUEST);
  } else if (err.code === "P2002") {
    (message = "Email already exists"), (statusCode = httpStatus.CONFLICT);
  } else if (err.code === "P2003") {
    (message = "User already exists"), (statusCode = httpStatus.CONFLICT);
  } else if (err.code === "P2025") {
    (message = "User not found"), (statusCode = httpStatus.CONFLICT);
  } else {
    (message = "Something went wrong"),
      (statusCode = httpStatus.INTERNAL_SERVER_ERROR);
  }

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
    stack,
  });
};

export default globalErrorHandler;
