import { Router } from "express";
import { validate } from "../Middlewares/SchemaParser";
import { addAccountController } from "../Controller/Account.controller";
import { addAccountBodySchema } from "../Schema/Account.schema";
import { loginAdminBodySchema } from "../Schema/Admin.schema";

const router = Router();

router.post(
  "/add",
  validate({ schema: addAccountBodySchema.body, typeOfReq: "Body" }),
  addAccountController
);

export default router;
