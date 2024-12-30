import { addAccountBodyType } from "../Schema/Account.schema";
import { Request, Response } from "express";
import { addAcountService } from "../Service/Account.service";
import Logger from "../Utils/Logger/Logger";

export const addAccountController = async (
    req: Request<{}, {}, addAccountBodyType>,
    res: Response
  ): Promise<void> => {
    try {
        const { response, statusNumber } = await addAcountService();
        res.status(statusNumber).send(response);
      } catch (error) {
        Logger.error(JSON.stringify(error));
        res.status(500).send(error);
      }
  };