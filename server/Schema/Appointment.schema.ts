import {number, object, string, TypeOf } from "zod";

export const addAppointmentBodySchema= {
  body: object({
    name_of_person: string({
      required_error: "Particular is Required",
    }),
    contact_number: number().optional(),
    country: string().max(50).optional(),
    appointment_date : string({
        required_error: "Date is required"
    }),
    purpose_of_visit: string().optional(),
    email: string().optional(),
    remark: string().optional()
  })
};
export type addAppointmentBodySchema = TypeOf<typeof addAppointmentBodySchema.body>;

export const updateAppointmentBodySchema= {
    body: object({
      name_of_person: string({
        required_error: "Particular is Required",
      }),
      contact_number: number().optional(),
      country: string().max(50).optional(),
      appointment_date : string({
          required_error: "Date is required"
      }),
      purpose_of_visit: string().optional(),
      email: string().optional(),
      remark: string().optional()
    })
  };
export type updateAppointmentBodySchema = TypeOf<typeof updateAppointmentBodySchema.body>;

export const deleteAppointmentBodySchema= {
    body: object({
      appointment_id: string({
        required_error: "Particular is Required",
      }).uuid(),
    })
  };
  export type deleteAppointmentBodySchema = TypeOf<typeof updateAppointmentBodySchema.body>;