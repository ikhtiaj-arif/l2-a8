import { NextFunction, Request, RequestHandler, Response } from "express";
//a higher order function to handle all async calls

const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
};

export default catchAsync;
