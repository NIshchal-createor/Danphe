import { any, number, object, string, TypeOf } from "zod";

export const loginAdminBodySchema = {
  body: object({
    email: string({ required_error: "Email is required" }).email(
      "Please Enter valid Email"
    ),
    password: string({
      required_error: "Password is Required",
    }).max(64, "Password cannot be more than 64 Characters"),
  }).strict("Please Enter required field"),
};

export type loginAdminBodyType = TypeOf<typeof loginAdminBodySchema.body>;

export const registerAdminBodySchema = {
  body: object({
    fullname: string({ required_error: "Name is required" }).regex(
      new RegExp(/^[a-z A-Z0-9_\-.]*$/gm),
      "Please Enter valid Name without special characters"
    ),
    email: string({ required_error: "Email is required" }).email(
      "Please Enter valid Email"
    ),
    password: string({
      required_error: "Password is Required",
    }).max(64, "Password cannot be more than 64 Characters"),
    confirmPassword: string({ required_error: "Confirm Password is required" }),
  })
    .strict("Please Enter required field")
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: "confirmPassword must match password",
      path: ["confirmPassword"],
    }),
};

export type registerAdminBodyType = TypeOf<typeof registerAdminBodySchema.body>;
