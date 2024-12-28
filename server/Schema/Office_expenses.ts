import {number, object, string, TypeOf } from "zod";

export const addOfficeExpensesBodySchema= {
  body: object({
    particular: string({
      required_error: "Particular is required",
    }),
    amount: number({
        required_error: "Amount is required",
    }),
  })
};
export type addOfficeExpensesBodyType = TypeOf<typeof addOfficeExpensesBodySchema.body>;

export const updateOfficeExpensesBodySchema= {
    body: object({
        particular: string({
          required_error: "Particular is required",
        }),
        amount: number({
            required_error: "Amount is required",
        }),
      })
  };
export type updateOfficeExpensesBodySchema = TypeOf<typeof updateOfficeExpensesBodySchema.body>;


export const deleteOfficeExpensesBodySchema= {
    body: object({
      expense_id: string({
        required_error: "Particular is Required",
      }).uuid(),
    })
  };
  export type deleteOfficeExpensesBodySchema = TypeOf<typeof deleteOfficeExpensesBodySchema.body>;    
