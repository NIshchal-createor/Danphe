import {object, string, TypeOf } from "zod";

export const addAccountBodySchema= {
  body: object({
    particular: string({
      required_error: "Particular is Required",
    }),
    counter: string({
        required_error: "Counter is required"
    }),
    amount: string({
        required_error: "Amount is required"
    }),
    amount_status: string({
        required_error: "Amount status is required"
    }),
    payment_method: string({
        required_error: "Payment method is required"
    }),
  }).strict("Please Enter required field"),
};

export type addAccountBodyType = TypeOf<typeof addAccountBodySchema.body>;


export const updateAccountBodySchema= {
  body: object({
    particular: string({
      required_error: "Particular is Required",
    }),
    counter: string({
        required_error: "Counter is required"
    }),
    amount: string({
        required_error: "Amount is required"
    }),
    amount_status: string({
        required_error: "Amount status is required"
    }),
    payment_method: string({
        required_error: "Payment method is required"
    }),
  })
  
};

export const deleteAccountBodySchema = {
  body: object({
    brand_id: string({ required_error: "Brand id is required" }).uuid(),
  }),
};
export type deleteAccountBodyType = TypeOf<typeof deleteAccountBodySchema.body>;