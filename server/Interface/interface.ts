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

export interface purchase {
  product_name: string;
  colour: string;
  product_image: string;
  brand_id: string;
  quantity: number;
  createdAt: Date;
  updateAt: Date;
}

export interface purchaseTable extends purchase {
  product_id: string;
}

export interface stocksTable {
  product_id: string;
  stocks: number;
}

export interface sales {
  product_id: string;
  quantity: number;
  price: number;
  created_At: Date;
  updated_At: Date;
}

export interface salesTable extends sales {
  sales_id: string;
}

export interface prdictSales extends salesTable {
  price: number;
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
