import { string } from "zod";

export interface sqlQuery {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
}
export interface Admin {
  fullname: string;
  email: string;
  password: string;
}

export interface AdminTable extends Admin {
  admin_id: string;
}

export interface jwtToken {
  admin_id: string;
  iat: number;
  exp: number;
}


export interface office_expenses {
 particular: string;
 amount: number;
 created_At: Date;
 updated_At: Date;
}

export interface office_expensesTable extends office_expenses {
  expense_id: string;
}

export interface accounts{
  particular: string;
  counter: string;
  amount: number;
  amount_status : string;
  payment_method : string;
}

export interface accountsTable extends accounts{
  account_id: string
}

export interface appointments{
  name_of_person : string;
  contact_no: number;
  country: string;
  appointment_date: Date;
  purpose_of_visit: string;
  email: string;
  remark: string;
}

export interface appointmentsTable extends appointments{
  appointment_id:string;
}

export interface insurance{
  name_of_person : string;
  country: string;
  certificate: string;
  duration: string;
  start_date: Date;
  return_date: Date;
  amount: number;
  payment: number;
  remark: string;
}

export interface insuranceTable extends insurance{
  insurance_id: string;
}

export interface mutlerFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}
