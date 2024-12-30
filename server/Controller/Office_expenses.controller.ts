import { addOfficeExpensesBodyType, deleteOfficeExpensesBodyType, idOfficeExpenseParamType, updateOfficeExpensesBodyType } from "../Schema/Office_expenses";
import { Request, Response } from "express";
import Logger from "../Utils/Logger/Logger";
import { addOfficeExpensesService, deleteOfficeExpenseService, readOfficeExpenseService, updateOfficeExpensesService } from "../Service/Office_expenses.service";

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

export const updateOfficeExpensesController = async (req: Request<idOfficeExpenseParamType, {}, updateOfficeExpensesBodyType>, res: Response): Promise<void> => {

  const {particular, amount} = req.body
  const {expense_id} = req.params
  try {
    const { response, statusNumber } = await updateOfficeExpensesService({particular, amount}, {expense_id});
    res.status(statusNumber).send(response);
  } catch (error) {
    Logger.error(JSON.stringify(error));
    res.status(500).send(error);
  }
}

export const deleteOfficeExpensesController = async (req: Request<deleteOfficeExpensesBodyType, {}, {}>, res: Response) => {
  const {expense_id} = req.params
  try {
    const {response, statusNumber} = await deleteOfficeExpenseService({expense_id})
    res.status(statusNumber).send(response);
  } catch (error) {
    Logger.error(JSON.stringify(error));
    res.status(500).send(error);
  }
}

export const readOfficeExpensesController = async (req: Request<{}, {}, {}>, res: Response) => {
  try {
    const {response, statusNumber} = await readOfficeExpenseService()
    res.status(statusNumber).send(response);
  } catch (error) {
    Logger.error(JSON.stringify(error));
    res.status(500).send(error);
  }
}