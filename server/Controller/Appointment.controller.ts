import { Request, Response } from "express";
import Logger from "../Utils/Logger/Logger";
import { addAppointmentBodyType, deleteAppointmentBodyType, idAppointmentBodyType, updateAppointmentBodyType } from "../Schema/Appointment.schema";
import { addAppointmentService, deleteAppointmentService, updateAppointmentService } from "../Service/Appointments.service";

export const addAppointmentController = async (
    req: Request<{}, {}, addAppointmentBodyType>,
    res: Response
  ): Promise<void> => {
    const {name_of_person, contact_number, country, appointment_date, purpose_of_visit, remark, email} = req.body
    try {
        const { response, statusNumber } = await addAppointmentService({name_of_person, contact_number, country, appointment_date, purpose_of_visit, email, remark});
        res.status(statusNumber).send(response);
      } catch (error) {
        Logger.error(JSON.stringify(error));
        res.status(500).send(error);
      }
};

export const updateAppointmentController = async (req: Request<idAppointmentBodyType, {}, updateAppointmentBodyType>, res: Response): Promise<void> => {
    const {name_of_person, appointment_date, contact_number, country, email, purpose_of_visit, remark} = req.body
    const {appointment_id} = req.params
    try {
        const { response, statusNumber } = await updateAppointmentService({name_of_person, contact_number, country, appointment_date, purpose_of_visit, email, remark}, {appointment_id});
        res.status(statusNumber).send(response);
    } catch (error) {
        Logger.error(JSON.stringify(error));
        res.status(500).send(error);
    }
}

export const deleteAppointmentController = async (req:Request<deleteAppointmentBodyType, {}, {}>, res: Response):Promise<void> => {
    const {appointment_id} = req.params
    try {
        const { response, statusNumber } = await deleteAppointmentService({appointment_id});
        res.status(statusNumber).send(response);
    } catch (error) {
        Logger.error(JSON.stringify(error));
        res.status(500).send(error);
    }
}