import {number, object, string, TypeOf } from "zod";

export const addTranslationBodySchema= {
  body: object({
    documents: string({
      required_error: "Documents is required",
    }),
    total_translation: number({
        required_error: "It is required"
    }),
    format_translation: number().optional(),
    non_format_tranlation: number().optional(),
    amount: number({required_error: "Amount is required"}),
    remark: string().optional(),
  })
};
export type addTranslationBodySchema = TypeOf<typeof addTranslationBodySchema.body>;

export const updateTranslationBodySchema= {
    body: object({
        documents: string({
          required_error: "Documents is required",
        }),
        total_translation: number({
            required_error: "It is required"
        }),
        format_translation: number().optional(),
        non_format_tranlation: number().optional(),
        amount: number({required_error: "Amount is required"}),
        remark: string().optional(),
      })
  };
export type updateTranslationBodySchema = TypeOf<typeof updateTranslationBodySchema.body>;

export const deleteTranslationBodySchema= {
    body: object({
      translation_id: string({
        required_error: "Particular is Required",
      }).uuid(),
    })
  };
  export type deleteTranslationBodySchema = TypeOf<typeof deleteTranslationBodySchema.body>;