import {appointmentsTable, insuranceTable, sqlQuery } from "../Interface/interface";
import Sql from "../Utils/Database/Action"
import crypto from "crypto";
import {addAppointmentBodyType, deleteAppointmentBodyType, idAppointmentBodyType, updateAppointmentBodyType } from "../Schema/Appointment.schema";
import { addInsuranceBodyType, idInsuranceBodyType, updateInsuranceBodySchema, updateInsuranceBodyType } from "../Schema/Insurance.schema";

export async function addInsuranceService({name_of_person, certificate_number, start_date, end_date, amount, client_payment, destination_country, remark, duration}:addInsuranceBodyType): Promise<any> {  
    const insurance_id = crypto.randomUUID()
    const {affectedRows} = await Sql.runQuery("INSERT INTO insurance VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [insurance_id, name_of_person, destination_country, certificate_number, duration, start_date, end_date, amount, client_payment, remark ]) as sqlQuery

    if (affectedRows > 0) {
        const [inserted_insurance] = await Sql.runQuery("SELECT * FROM insurance WHERE insurance_id = ?", [insurance_id]) as Array<insuranceTable>

        return{
            response: {
                message: "Insurance Inserted Sucessfully",
                insurance: inserted_insurance
            },
            statusNumber: 200
        }
    }else{
        return{
            response: {
                message: "Insurance insertion Unsucessfull",
                insurance: {}
            },
            statusNumber: 400
        }
    }
   
}


export async function updateInsuranceService({name_of_person, certificate_number, start_date, end_date, amount, client_payment, destination_country, remark, duration}: updateInsuranceBodyType, {insurance_id}: idInsuranceBodyType): Promise<any> {  

console.log(insurance_id)
   const [insurance] = await Sql.runQuery("SELECT * FROM insurance WHERE insurance_id = ?", [insurance_id]) as Array<insuranceTable>

   if(insurance != undefined){


    const {affectedRows} = await Sql.runQuery("UPDATE insurance SET name=?, country=?, certificate=?, duration=?, start_date=?, return_date=?, amount=?, payment=?, remark=? WHERE insurance_id = ?", [name_of_person, destination_country, certificate_number, duration, start_date, end_date, amount, client_payment, remark, insurance_id]) as sqlQuery
    const [updated_insurance]  = await Sql.runQuery("SELECT * FROM insurance WHERE insurance_id = ?", [insurance_id]) as Array<insuranceTable>

    if (affectedRows > 0){
        return {
            response: {
                message: "Insurance Updated Sucessfully",
                insurance: updated_insurance
            },
            statusNumber: 200
        }
    }else{
        return {
            response: {
                message: "Insurance Updation Unsucessfully",
                insurance: {}
            },
            statusNumber: 400
        }
    }
   }else{
    return {
        response: {
            message: "Insurance not found",
            insurance: {}
        },
        statusNumber: 404
    }
   }
}
