import {z, number, object, string, TypeOf } from "zod";
import { updateOfficeExpensesBodySchema } from "./Office_expenses";

export const addAccountBodySchema= {
  body: object({
    particular: string({
      required_error: "Particular is Required",
    }),
    counter: z.enum(['COUNTER 1', 'COUNTER 2']),
    amount: number({
        required_error: "Amount is required"
    }),
    amount_status: z.enum(['DEBIT', 'DEBIT(QR)', 'CREDIT']),
    payment_method: z.enum(['CASH', 'BANK', 'FONEPAY'])
  }).strict("Please Enter required field"),
};

export type addAccountBodyType = TypeOf<typeof addAccountBodySchema.body>;


export const updateAccountBodySchema= {
  body: object({
    particular: string({
      required_error: "Particular is Required",
    }),
    counter: z.enum(['COUNTER 1', 'COUNTER 2']),
    amount: number({
        required_error: "Amount is required"
    }),
    amount_status: z.enum(['DEBIT', 'DEBIT(QR)', 'CREDIT']),
    payment_method: z.enum(['CASH', 'BANK', 'FONEPAY'])
  })
};

export type updateAccountBodyType = TypeOf<typeof updateAccountBodySchema.body>

export const deleteAccountBodySchema = {
  body: object({
    account_id: string({ required_error: "account_id is required" }).uuid(),
  }),
};
export type deleteAccountBodyType = TypeOf<typeof deleteAccountBodySchema.body>;

export const idAccountBodySchema = {
  body: object({
    account_id: string({required_error: "account id is required="})
  })
}

export type idAccountBodyType = TypeOf<typeof idAccountBodySchema.body>