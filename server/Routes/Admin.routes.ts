import { Router } from "express";
import { validate } from "../Middlewares/SchemaParser";
import {
  loginAdminBodySchema,
  registerAdminBodySchema,
} from "../Schema/Admin.schema";
import {
  loginController,
  registerController,
} from "../Controller/Admin.controller";
const router = Router();

router.post(
  "/login",
  validate({ schema: loginAdminBodySchema.body, typeOfReq: "Body" }),
  loginController
);

router.post(
  "/register",
  validate({ schema: registerAdminBodySchema.body, typeOfReq: "Body" }),
  registerController
);
export default router;
