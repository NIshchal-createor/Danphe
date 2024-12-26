import { Request, Response, NextFunction } from "express";
import Config from "../Config/config";
import jwt from "jsonwebtoken";
import { jwtToken } from "../Interface/interface";

export function admin(req: Request, res: Response, next: NextFunction) {
  const authHeaders = req.headers["authorization"];
  const token = authHeaders && authHeaders.split(" ")[1];
  if (token == null) {
    return res.status(400).send("No token Available");
  }
  try{
    const { admin_id } = jwt.verify(token, Config.secret.access) as jwtToken;

    if (!admin_id) {
      return res.status(401). send("Invalid Token");
    }

    req.body.admin_id = admin_id;
    next();
  }catch (error) {
    return res.status(401).send("Token Expired");
  }
}
