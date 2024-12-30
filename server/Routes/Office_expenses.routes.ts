import { Router } from "express";
import { validate } from "../Middlewares/SchemaParser";
import { addOfficeExpensesBodySchema, deleteOfficeExpensesBodySchema, idOfficeExpenseParamSchema, updateOfficeExpensesBodySchema } from "../Schema/Office_expenses";
import { addOfficeExpensesController, deleteOfficeExpensesController, readOfficeExpensesController, updateOfficeExpensesController } from "../Controller/Office_expenses.controller";

const router = Router();

router.post(
  "/add",
  validate({ schema: addOfficeExpensesBodySchema.body, typeOfReq: "Body" }),
  addOfficeExpensesController
);

router.put(
"/update/:expense_id",
validate({schema: idOfficeExpenseParamSchema.body, typeOfReq: "Params"}),
validate({schema: updateOfficeExpensesBodySchema.body, typeOfReq: "Body"}),
updateOfficeExpensesController
);

router.delete(
  "/delete/:expense_id",
  validate({schema: deleteOfficeExpensesBodySchema.body, typeOfReq: "Params"}),
  deleteOfficeExpensesController
)

router.get(
  "/read",
  readOfficeExpensesController
)

export default router;
