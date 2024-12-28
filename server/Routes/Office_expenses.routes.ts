import { Router } from "express";
import { validate } from "../Middlewares/SchemaParser";
import { addOfficeExpensesBodySchema } from "../Schema/Office_expenses";
import { addOfficeExpensesController } from "../Controller/Office_expenses.controller";

const router = Router();

router.post(
  "/add",
  validate({ schema: addOfficeExpensesBodySchema.body, typeOfReq: "Body" }),
  addOfficeExpensesController
);

export default router;
