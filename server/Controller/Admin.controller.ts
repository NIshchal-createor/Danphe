import { Request, Response } from "express";
import {
  loginAdminBodyType,
  registerAdminBodyType,
} from "../Schema/Admin.schema";
import Logger from "../Utils/Logger/Logger";
import { loginService, registerService } from "../Service/Admin.service";

export const loginController = async (
  req: Request<{}, {}, loginAdminBodyType>,
  res: Response
): Promise<void> => {
  const { email, password } = req.body;
  try {
    const { response, statusNumber } = await loginService({ email, password });
    res.status(statusNumber).send(response);
  } catch (error) {
    Logger.error(JSON.stringify(error));
    res.status(500).send(error);
  }
};

export const registerController = async (
  req: Request<{}, {}, Omit<registerAdminBodyType, "confirmPassword">>,
  res: Response
): Promise<void> => {
  const { fullname, email, password } = req.body;
  try {
    const { response, statusNumber } = await registerService({
      fullname,
      email,
      password,
    });
    res.status(statusNumber).send(response);
  } catch (error) {
    Logger.error(JSON.stringify(error));
    res.status(500).send(error);
  }
};
