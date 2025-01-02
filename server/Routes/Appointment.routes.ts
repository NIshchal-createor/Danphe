import { Router } from "express";
import { validate } from "../Middlewares/SchemaParser";
import { addAppointmentBodySchema, deleteAppointmentBodySchema, idAppointmentBodySchema, updateAppointmentBodySchema } from "../Schema/Appointment.schema";
import { addAppointmentController, deleteAppointmentController, updateAppointmentController } from "../Controller/Appointment.controller";

const router = Router();

router.post(
  "/add",
  validate({ schema: addAppointmentBodySchema.body, typeOfReq: "Body" }),
  addAppointmentController
);

router.put(
    "/update/:appointment_id",
    validate({ schema: idAppointmentBodySchema.body, typeOfReq: "Params" }),
    validate({ schema: updateAppointmentBodySchema.body, typeOfReq: "Body",}),
    updateAppointmentController
);

router.delete(
   "/delete/:appointment_id",
   validate({ schema: deleteAppointmentBodySchema.body, typeOfReq: "Params" }),
   deleteAppointmentController
);

export default router;
