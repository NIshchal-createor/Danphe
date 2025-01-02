import { Router } from "express";
import { validate } from "../Middlewares/SchemaParser";
import { addInsuranceController, updateInsuranceController } from "../Controller/Insurance.controller";
import { addInsuranceBodySchema, idInsuranceBodySchema, updateInsuranceBodySchema } from "../Schema/Insurance.schema";

const router = Router();

router.post(
  "/add",
  validate({ schema: addInsuranceBodySchema.body, typeOfReq: "Body" }),
  addInsuranceController
);

router.put(
  "/update/:insurance_id",
  validate({ schema: idInsuranceBodySchema.body, typeOfReq: "Params" }),
  validate({ schema: updateInsuranceBodySchema.body, typeOfReq: "Body" }),
  updateInsuranceController
);

export default router;
