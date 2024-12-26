import bycrypt from "bcrypt";
import Sql from "../Utils/Database/Action";
import crypto from "crypto";
import { AdminTable, sqlQuery } from "../Interface/interface";
import {
  loginAdminBodyType,
  registerAdminBodyType,
} from "../Schema/Admin.schema";
import { accessTokenGenerator } from "../Utils/Generators/jwtgenerator";

export async function loginService({
  email,
  password,
}: loginAdminBodyType): Promise<any> {
  const checkEmail = (await Sql.runQuery("SELECT * FROM admin where email= ?", [
    email,
  ])) as Array<AdminTable>;

  if (checkEmail.length === 0) {
    return {
      response: { message: "Account doesnot exist" },
      statusNumber: 400,
    };
  }

  const comparePassword = await bycrypt.compare(
    password,
    checkEmail[0].password
  );

  if (comparePassword) {
    const { admin_id } = checkEmail[0];
    const accessToken = accessTokenGenerator(admin_id);

    return {
      response: {
        message: "Login Successful",
        accessToken: accessToken,
      },
      statusNumber: 200,
    };
  } else {
    return {
      response: { message: "Incorrect Password" },
      statusNumber: 400,
    };
  }
}

export async function registerService({
  fullname,
  email,
  password,
}: Omit<registerAdminBodyType, "confirmPassword">): Promise<{
  response: any;
  statusNumber: number;
}> {
  const admin_id = crypto.randomUUID();
  const hashed_password = await bycrypt.hash(password, 10);
  const { affectedRows } = (await Sql.runQuery(
    "INSERT INTO admin VALUES(?, ?, ?, ?)",
    [admin_id, fullname, email, hashed_password]
  )) as sqlQuery;
  if (affectedRows > 0) {
    return {
      response: "Admin registrations successful",
      statusNumber: 200,
    };
  } else {
    return {
      response: "Admin registration failed",
      statusNumber: 400,
    };
  }
}
