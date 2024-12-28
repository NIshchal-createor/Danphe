import { addOfficeExpensesBodyType } from "../Schema/Office_expenses";
import { Request, Response } from "express";
import Logger from "../Utils/Logger/Logger";
import { addOfficeExpensesService } from "../Service/Office_expenses.service";

export const addOfficeExpensesController = async (
    req: Request<{}, {}, addOfficeExpensesBodyType>,
    res: Response
  ): Promise<void> => {
    const {particular, amount} = req.body
    try {
        const { response, statusNumber } = await addOfficeExpensesService({particular, amount});
        res.status(statusNumber).send(response);
      } catch (error) {
        Logger.error(JSON.stringify(error));
        res.status(500).send(error);
      }
  };