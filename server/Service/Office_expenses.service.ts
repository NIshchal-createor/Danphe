import crypto from "crypto";
import { addOfficeExpensesBodyType, deleteOfficeExpensesBodyType, idOfficeExpenseParamType, updateOfficeExpensesBodyType } from "../Schema/Office_expenses";
import Sql from "../Utils/Database/Action";
import { office_expensesTable, sqlQuery } from "../Interface/interface";



export async function addOfficeExpensesService({particular, amount}: addOfficeExpensesBodyType): Promise<any> {

    const expense_id = crypto.randomUUID()
    const {affectedRows} = (await Sql.runQuery(
        "INSERT INTO office_expenses VALUES(?, ?, ?, ?, ?)",
        [
            expense_id,
            particular,
            amount,
            new Date().toLocaleDateString("en-CA"),
            new Date().toLocaleDateString("en-CA")
        ]
      ))  as sqlQuery
    
      if (affectedRows > 0 ) {
        const [inserted_data] = (await Sql.runQuery(
            "SELECT * FROM office_expenses WHERE expense_id = ?",
            [expense_id]
          )) as Array<office_expensesTable>;
        return {
          response: {
            message: "Expense inserted successfuly",
            insertedBrand: inserted_data,
          },
          statusNumber: 200,
    };
}
}


export async function updateOfficeExpensesService({particular, amount}: updateOfficeExpensesBodyType, {expense_id}: idOfficeExpenseParamType): Promise<any> {

  const [expense] = await Sql.runQuery("SELECT * FROM office_expenses WHERE expense_id= ?", [expense_id]) as Array<office_expensesTable>

  if (expense!=undefined){
      const {affectedRows} = (await Sql.runQuery("UPDATE office_expenses SET particular= ?, amount= ? WHERE expense_id = ?", [particular, amount, expense_id])) as sqlQuery

      if (affectedRows > 0){
        const [updated_expense] = await Sql.runQuery("SELECT * FROM office_expenses WHERE expense_id= ?", [expense_id]) as Array<office_expensesTable>
        return {
          response: {
            message: "Expense updated successfuly",
            data : updated_expense
          },
          statusNumber: 200,
      }
  }
  }
  return {
    response: {
      message: "No such expense found",
      data : {}
    },
    statusNumber: 404,
}
}


export async function deleteOfficeExpenseService({expense_id}: deleteOfficeExpensesBodyType):Promise<any> {
  const [expense] = await Sql.runQuery("SELECT * FROM office_expenses WHERE expense_id= ?", [expense_id]) as Array<office_expensesTable>

  if (expense!=undefined){
    const {affectedRows} = (await Sql.runQuery("DELETE FROM office_expenses WHERE expense_id= ?", [expense_id])) as sqlQuery

    if (affectedRows > 0){
      return {
        response: {
          message: "Expense deleted successfuly",
          data : expense
        },
        statusNumber: 200,
    }
}
}
return {
  response: {
    message: "No such expense found",
    data : {}
  },
  statusNumber: 404,
}
}

export async function readOfficeExpenseService():Promise<any> {

  const resp = await Sql.runQuery("SELECT * FROM office_expenses", []) as Array<office_expensesTable>

  if (resp && resp.length > 0){
    return {
      response: {
        message: "Expense read sucessfull",
        data : resp
      },
      statusNumber: 200,
    }
  }else{
    return {
      response: {
        message: "Expense read sucessfull",
        data : []
      },
      statusNumber: 200,
    }
  }
 
}