import {number, object, string, TypeOf } from "zod";

export const addInsuranceBodySchema= {
  body: object({
    name_of_person: string({
      required_error: "Name is Required",
    }),
    destination_country: string().optional(),
    certificate_number: string({
        required_error: "Certificate number is required"
    }).max(50),
    start_date: string({
        required_error: "Start date is required"
    }),
    end_date: string({
        required_error: "End date is required"
    }),
    amount: number().optional(),
    client_payment: number().optional(),
    remark: string().optional(),
  })
};
export type addAppointmentBodySchema = TypeOf<typeof addInsuranceBodySchema.body>;

export const updateInsuranceBodySchema= {
    body: object({
        name_of_person: string({
          required_error: "Particular is Required",
        }),
        destination_country: string().optional(),
        certificate_number: string({
            required_error: "Certificate number is required"
        }).max(50),
        start_date: string({
            required_error: "Start date is required"
        }),
        end_date: string({
            required_error: "End date is required"
        }),
        amount: number().optional(),
        client_payment: number().optional(),
        remark: string().optional(),
      })
  };
export type updateInsuranceBodySchema = TypeOf<typeof updateInsuranceBodySchema.body>;

export const deleteInsuranceBodySchema= {
    body: object({
      insurance_id: string({
        required_error: "Insurance id is Required",
      }).uuid(),
    })
  };
  export type deleteInsuranceBodySchema = TypeOf<typeof deleteInsuranceBodySchema.body>;