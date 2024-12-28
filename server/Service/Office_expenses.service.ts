import crypto from "crypto";
import { addOfficeExpensesBodyType } from "../Schema/Office_expenses";
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
        const INSERTED_DATA = (await Sql.runQuery(
            "SELECT * FROM office_expenses WHERE expense_id = ?",
            [expense_id]
          )) as Array<office_expensesTable>;
        return {
          response: {
            message: "Expense inserted successfuly",
            insertedBrand: INSERTED_DATA[0],
          },
          statusNumber: 200,
    };
}
}
