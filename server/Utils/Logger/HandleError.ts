import { Request, Response } from "express";
import Logger from "../../Utils/Logger/Logger";

const HandleError = () => {
  return (err: any, req: Request, res: Response) => {
    Logger.error(err);
    res.status(500).send(err);
  };
};
export default HandleError;
