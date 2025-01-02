import { addAccountBodyType, deleteAccountBodyType, idAccountBodyType, updateAccountBodyType } from "../Schema/Account.schema";
import { Request, Response } from "express";
import { addAcountService, deleteAccountService, updateAccountService } from "../Service/Account.service";
import Logger from "../Utils/Logger/Logger";

export const addAccountController = async (
    req: Request<{}, {}, addAccountBodyType>,
    res: Response
  ): Promise<void> => {
    const {particular, counter, amount, amount_status, payment_method} = req.body
    try {
        const { response, statusNumber } = await addAcountService({particular, counter, amount, amount_status, payment_method});
        res.status(statusNumber).send(response);
      } catch (error) {
        Logger.error(JSON.stringify(error));
        res.status(500).send(error);
      }
  };

export const updateAccountController = async (req: Request<idAccountBodyType, {}, updateAccountBodyType>, res: Response): Promise<void> => {
  const {particular , amount, amount_status, payment_method, counter} = req.body
  const{account_id} = req.params
  try {
    const {response, statusNumber} = await updateAccountService({account_id}, {particular, amount, amount_status, payment_method, counter})
    res.status(statusNumber).send(response)
  } catch (error) {
    Logger.error(JSON.stringify(error));
    res.status(500).send(error);
  }
}

export const deleteAccountController = async (req: Request<deleteAccountBodyType, {}, {}>, res: Response): Promise<void> => {
  const{account_id} = req.params
  try {
    const {response, statusNumber} = await deleteAccountService({account_id})
    res.status(statusNumber).send(response)
  } catch (error) {
    Logger.error(JSON.stringify(error));
    res.status(500).send(error);
  }
}

