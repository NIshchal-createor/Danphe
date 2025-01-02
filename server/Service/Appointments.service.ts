import {appointmentsTable, sqlQuery } from "../Interface/interface";
import Sql from "../Utils/Database/Action"
import crypto from "crypto";
import {addAppointmentBodyType, deleteAppointmentBodyType, idAppointmentBodyType, updateAppointmentBodyType } from "../Schema/Appointment.schema";

export async function addAppointmentService({name_of_person, contact_number, country, appointment_date, purpose_of_visit, email, remark}:addAppointmentBodyType): Promise<any> {  
   const [prev_appointment] = await Sql.runQuery("SELECT * FROM appointments WHERE name=? and date=?", [name_of_person, appointment_date]) as Array<appointmentsTable> 

   if (prev_appointment != undefined) {
    return{
        response: {
            message: "Appointment already exist in the same date",
            appointment: prev_appointment
        },
        statusNumber: 409
    }
   }else{
       const appointment_id = crypto.randomUUID()
       const {affectedRows} = await Sql.runQuery("INSERT INTO appointments VALUES(?, ?, ?, ?, ?, ?, ?, ?)", [appointment_id, name_of_person, contact_number, country, appointment_date, purpose_of_visit, email, remark]) as sqlQuery

       if (affectedRows > 0) {
        const [inserted_appointment] = await Sql.runQuery("SELECT * FROM appointments WHERE appointment_id = ?", [appointment_id]) as Array<appointmentsTable>

        return {
            response: {
                message: "Appointment inserted sucessfully",
                appointment: inserted_appointment
            },
            statusNumber: 200
        }
    }else{
        return {
            response: {
                message: "Appointment insertion Failed",
                appointment: {}
            },
            statusNumber: 400
        }
    }
   }

}

export async function updateAppointmentService({name_of_person, contact_number, country, appointment_date, purpose_of_visit, email, remark}: updateAppointmentBodyType, {appointment_id}: idAppointmentBodyType) : Promise<any> {
    const [appointment] = await Sql.runQuery("SELECT * FROM appointments WHERE appointment_id = ?", [appointment_id]) as Array<appointmentsTable>

    if(appointment){
        const {affectedRows} = await Sql.runQuery("UPDATE appointments SET name= ?, contact=?, country=?, date=?, purpose=?, email=?, remark= ? WHERE appointment_id = ?", [name_of_person, contact_number, country, appointment_date, purpose_of_visit, email, remark, appointment_id]) as sqlQuery

        if (affectedRows > 0){
            const [updated_appointment] = await Sql.runQuery("SELECT * FROM appointments WHERE appointment_id = ?", [appointment_id]) as Array<appointmentsTable>

            return{
                response: {
                    message: "Appointment updated sucessfully",
                    appointment: updated_appointment
                },
                statusNumber: 200
            }
        }{
            return{
                response: {
                    message: "Appointment updation unsucessfull",
                    appointment: {}
                },
                statusNumber: 400
            }   
        }
    }{
        return{
            response: {
                message: "Appointment not found",
                appointment: {}
            },
            statusNumber: 404
        }   
    }
}


export async function deleteAppointmentService({appointment_id}: deleteAppointmentBodyType):Promise<any> {
    const [appointment_to_be_deleted] = await Sql.runQuery("SELECT * FROM appointments WHERE appointment_id = ?", [appointment_id]) as Array<appointmentsTable>

    if (appointment_to_be_deleted != undefined) {
        const {affectedRows} = await Sql.runQuery("DELETE FROM appointments WHERE appointment_id = ?", [appointment_id]) as sqlQuery
        if (affectedRows > 0) {
            return {
                response : {
                    message: "Appointment deleted sucessfully",
                    appointment: appointment_to_be_deleted
                },
                statusNumber: 200
            }
        }
    }else{
        return {
            response : {
                message: "Appointment not found",
                appointment: {}
            },
            statusNumber: 404
        }
    }
}