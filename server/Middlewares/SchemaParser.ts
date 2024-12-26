import { AnyZodObject, ZodTypeAny } from "zod";
import { NextFunction, Request, Response } from "express";
import { validationType } from "../Types/types";
export const validate =
  (
    ...args: {
      schema: ZodTypeAny;
      typeOfReq: validationType;
    }[]
  ) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      for (let i = 0; i < args.length; i++) {
        if (args[i].typeOfReq === "Body") {
          await args[i].schema.parseAsync(req.body);
        } else if (args[i].typeOfReq === "Params") {
          await args[i].schema.parseAsync(req.params);
        } else if (args[i].typeOfReq === "Query") {
          await args[i].schema.parseAsync(req.query);
        }
      }
      return next();
    } catch (error) {
      return res.status(400).send(error);
    }
  };
