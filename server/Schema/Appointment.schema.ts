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
export type addAppointmentBodyType = TypeOf<typeof addAppointmentBodySchema.body>;

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
export type updateAppointmentBodyType = TypeOf<typeof updateAppointmentBodySchema.body>;

export const deleteAppointmentBodySchema= {
    body: object({
      appointment_id: string({
        required_error: "Particular is Required",
      }).uuid(),
    })
  };
  export type deleteAppointmentBodyType = TypeOf<typeof deleteAppointmentBodySchema.body>;


  export const idAppointmentBodySchema = {
    body: object({
      appointment_id: string({required_error: "account id is required="})
    })
  }
  
  export type idAppointmentBodyType = TypeOf<typeof idAppointmentBodySchema.body>