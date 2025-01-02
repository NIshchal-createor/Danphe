import { Router } from "express";
import { validate } from "../Middlewares/SchemaParser";
import { addAccountController, deleteAccountController, updateAccountController } from "../Controller/Account.controller";
import { addAccountBodySchema, deleteAccountBodySchema, idAccountBodySchema, updateAccountBodySchema } from "../Schema/Account.schema";

const router = Router();

router.post(
  "/add",
  validate({ schema: addAccountBodySchema.body, typeOfReq: "Body" }),
  addAccountController
);

router.put(
"/update/:account_id",
validate({schema : idAccountBodySchema.body,  typeOfReq: "Params"}),
validate({schema : updateAccountBodySchema.body,  typeOfReq: "Body"}),
updateAccountController)

router.delete(
"/delete/:account_id",
validate({schema : deleteAccountBodySchema.body,  typeOfReq: "Params"}),
deleteAccountController
)
export default router;
