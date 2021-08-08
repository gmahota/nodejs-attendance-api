import { Request, Response } from "express";
import ShiftService from "../../services/attendance/shift";
import UserShiftService from "../../services/attendance/userShift";
import Shift from "../../models/attendance/shift";
import WorkScheduleService from "../../services/attendance/workSchedule";
import User from './../../models/attendance/userAttendance';
import UserShift from './../../models/attendance/userShift';

export const get_all_Shifts = async (request: Request, response: Response) => {

  const Shifts = await ShiftService.getAll();

  return response.status(200).json(Shifts);
};

export const get_Shift = async (request: Request, response: Response) => {
  const { id } = request.params;

  const Shift = await ShiftService.getById(id);

  if (Shift) {
    return response.status(200).json(Shift);
  }
  return response.status(404).json({ msg: "no Shift with that id" });
};

export const create_Shift = async (request: Request, response: Response) => {
  const {
    name,
    description,
    type,
    status,
    timeIn,
    timeOut,
    minTimeIn,
    maxTimeOut,
    gracePeriod,
    dayOfWeek,
    scheduleId,
    userShifts

  } = await request.body;

  try {
    let item: Shift = {
      id: 0,
      name,
      description,
      type,
      status,
      timeIn,
      timeOut,
      minTimeIn,
      maxTimeOut,
      gracePeriod,
      dayOfWeek,
      userShifts
    };

    if (!!scheduleId) {
      item.schedule = await WorkScheduleService.getById(scheduleId)
    }

    item = await ShiftService.create(item);

    return response.status(200).json(item);

  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a product with that i", error: e },
    );
  }
};

export const edit_Shift = async (request: Request, response: Response) => {
  const {
    id,
    name,
    description,
    type,
    status,
    timeIn,
    timeOut,
    minTimeIn,
    maxTimeOut,
    gracePeriod,
    dayOfWeek,
    scheduleId
  } = await request.body;

  try {
    let item: Shift = await ShiftService.getById(id)

    item.name = name
    item.description = description
    item.type = type
    item.status = status
    item.timeIn = timeIn
    item.timeOut = timeOut
    item.minTimeIn = minTimeIn
    item.maxTimeOut = maxTimeOut
    item.gracePeriod = gracePeriod
    item.dayOfWeek = dayOfWeek

    item = await ShiftService.create(item);

    return response.status(200).json(item);

  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a product with that i", error: e },
    );
  }
};

export const create_UserShifts = async (request: Request, response: Response) => {

  const { id } = request.params;

  const { users } = request.body;

  try {

    let item: Shift = await ShiftService.getById(id);

    // Coloca todos como inactivo
    // Supostamente deve validar se o periodo e o user é o mesmo....

    item.userShifts?.filter(p=> p.status === "Activo")?.forEach(async (p:UserShift)=>{

      p.status = "Inactivo"

      await UserShiftService.create(p);

    })

    await ShiftService.create(item);

    users.forEach(async (user: User) => {
     const  userShift:UserShift = {
        id: 0,
        user: user,
        name:user.name,
        shift:item,
        status:"Activo",
        groupId: user.userGroup?.id ,
        groupName: user.userGroup?.name,
        dateStart: new Date(),
        dateEnd: new Date(),
      }

      await UserShiftService.create(userShift);

    })

    item = await ShiftService.getById(id);

    return response.status(200).json(item);

  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a product with that i", error: e },
    );
  }
};

export const delete_Shift = async (request: Request, response: Response) => {
  return response.status(500).json(
    { msg: "not Implemented" },
  );
  const { id } = request.body;

  try {
    //await productervice.remove(id);

    return response.send(200).json({ id: id });
  } catch (e) {
    return response.send(404).json(
      { msg: "error to create a order with that i" },
    );
  }
};
