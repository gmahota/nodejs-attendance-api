import { Request, Response } from "express";
import UserShiftService from "../../services/attendance/userShift";
import UserShift from "../../models/attendance/userShift";


export const get_all_UserShifts = async (request: Request, response: Response) => {

  console.log('************************ Entramos no get_all_UserShifts no Controller ');
  const Shifts = await UserShiftService.getAll();


  return response.status(200).json(Shifts);
};

export const get_UserShift = async (request: Request, response: Response) => {
  const { id } = request.params;

  const UserShift = await UserShiftService.getById(id);

  if (UserShift) {
    return response.status(200).json(UserShift);
  }
  return response.status(404).json({ msg: "no User Shift with that id" });
};

export const create_UserShift = async (request: Request, response: Response) => {
  const {
    id,
    userId,
    shiftId,
    groupId,
    groupName,
    status,
    dateStart,
    dateEnd
  } = await request.body;
  
  

  
  
  try {
    let item: UserShift = {
      id: 0,
      userId,
    shiftId,
    groupId,
    groupName,
    status,
    dateStart,
    dateEnd
    };

    
    item = await UserShiftService.create(item);

    return response.status(200).json(item);

  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a product with that i", error: e },
    );
  }
};

export const edit_UserShift = async (request: Request, response: Response) => {
  const {
    id,
    userId,
    shiftId,
    groupId,
    groupName,
    status,
    dateStart,
    dateEnd
  } = await request.body;

  try {
    let item: UserShift = await UserShiftService.getById(id)

    item.userId =userId,
    item.shiftId = shiftId,
    item.groupId = groupId,
    item.groupName = groupName,
    item.status = status,
    item.dateStart = dateStart,
    item.dateEnd = dateEnd;

    item = await UserShiftService.create(item);

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
