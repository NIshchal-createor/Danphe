import { Request, Response } from "express";
import Logger from "../Utils/Logger/Logger";
import { addAppointmentService} from "../Service/Appointments.service";
import { addInsuranceBodyType, idInsuranceBodyType, updateInsuranceBodyType } from "../Schema/Insurance.schema";
import { addInsuranceService, updateInsuranceService } from "../Service/Insurance.service";

export const addInsuranceController = async (
    req: Request<{}, {}, addInsuranceBodyType>,
    res: Response
  ): Promise<void> => {
    const {name_of_person, certificate_number, duration, start_date, end_date, amount, destination_country, client_payment, remark} = req.body
    try {
        const { response, statusNumber } = await addInsuranceService({name_of_person, certificate_number, duration, start_date, end_date, amount, destination_country, client_payment, remark});
        res.status(statusNumber).send(response);
      } catch (error) {
        Logger.error(JSON.stringify(error));
        res.status(500).send(error);
      }
};


export const updateInsuranceController = async (
    req: Request<idInsuranceBodyType, {}, updateInsuranceBodyType>,
    res: Response
  ): Promise<void> => {
    const {name_of_person, certificate_number, duration, start_date, end_date, amount, destination_country, client_payment, remark} = req.body
    const{ insurance_id } = req.params
    try {
        const { response, statusNumber } = await updateInsuranceService({name_of_person, certificate_number, duration, start_date, end_date, amount, destination_country, client_payment, remark}, {insurance_id});
        res.status(statusNumber).send(response);
      } catch (error) {
        Logger.error(JSON.stringify(error));
        res.status(500).send(error);
      }
};


