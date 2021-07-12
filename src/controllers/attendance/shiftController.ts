import { Request, Response } from "express";
import ShiftService from "../../services/attendance/shift";
import Shift from "../../models/attendance/shift";
import WorkScheduleService from "../../services/attendance/workSchedule";
import User from './../../models/attendance/user';
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

    const userShifts: UserShift[] = users.map((user: User) => {
      return {
        id: 0,
        user: user,
        shift: item,
        groupId: 0,
        groupName: "Ola Mundo",
        dateStart: new Date(),
        dateEnd: new Date(),
      }
    })

    item.userShifts = userShifts

    item = await ShiftService.create(item);

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
