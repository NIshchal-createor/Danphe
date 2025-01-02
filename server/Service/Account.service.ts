import { response } from "express";
import { accountsTable, sqlQuery } from "../Interface/interface";
import { addAccountBodyType, deleteAccountBodyType, idAccountBodyType, updateAccountBodyType } from "../Schema/Account.schema";
import Sql from "../Utils/Database/Action"
import crypto from "crypto";

export async function addAcountService({particular, counter, amount, amount_status, payment_method}:addAccountBodyType): Promise<any> {    
    const account_id = crypto.randomUUID();
    const {affectedRows} = await Sql.runQuery("INSERT INTO accounts VALUES(?, ?, ?, ?, ?, ?, ?, ?)",[account_id, particular, counter, amount, amount_status, payment_method, new Date().toLocaleDateString("en-CA"), new Date().toLocaleDateString("en-CA")]) as sqlQuery

    if (affectedRows > 0){
        const [INSERTED_ACCOUNT] = await Sql.runQuery("SELECT * FROM accounts WHERE account_id = ?", [account_id]) as Array<accountsTable>
        if (INSERTED_ACCOUNT!=undefined){
            return {
                response: {
                    message: "Account added sucessfully",
                    account: INSERTED_ACCOUNT
                },
                statusNumber: 200
            }
        }
    }
   
}

export async function updateAccountService({account_id}:idAccountBodyType, {particular, amount, amount_status, counter, payment_method}:updateAccountBodyType):Promise<any>{

    const [account] = await Sql.runQuery("SELECT * FROM accounts WHERE account_id= ?", [account_id]) as Array<accountsTable>
    if (account!=undefined){
        const {affectedRows} = await Sql.runQuery("UPDATE accounts SET particular=?, amount=?, status=?, counter=?, method=?", [particular, amount, amount_status, counter, payment_method]) as sqlQuery
        const [updated_account] = await Sql.runQuery("SELECT * FROM accounts WHERE account_id= ?", [account_id]) as Array<accountsTable>
        if (affectedRows > 0 && updated_account){
            return {
                response: {
                    message: "Account updated successfully",
                    account: updated_account
                },
                statusNumber: 200
            } 
        }return {
            response: {
                message: "Account not updated",
                account: {}
            },
            statusNumber: 404
        }
    }return {
        response: {
            message: "Account Not found",
            account: {}
        },
        statusNumber: 404
    }
}


export async function deleteAccountService({account_id}:deleteAccountBodyType):Promise<any>{
    const [account] = await Sql.runQuery("SELECT * FROM accounts WHERE account_id=?", [account_id]) as Array<accountsTable>
    if (account != undefined){
        const {affectedRows} = await Sql.runQuery("DELETE FROM accounts WHERE account_id=?", [account_id]) as sqlQuery
        if(affectedRows > 0){
            return{
                response: {
                    message: "Account deleted sucessfully",
                    account: account
                },
                statusNumber: 200
            }
        }
    }return {
        response: {
            message: "Account Not found",
            account: {}
        },
        statusNumber: 404
    }
}