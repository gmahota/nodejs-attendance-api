import Shift from "../../models/attendance/shift";
import { getRepository, getConnection } from "typeorm";
import calculateDate from "../../functions/calculateDate";

interface Key {
  id?: any;
}

const findById = async function findById(id: string): Promise<Shift> {
  const ShiftRepository = getRepository(Shift);

  const data: Shift = await ShiftRepository.findOneOrFail({
    where: { id: id },
    relations: ["schedule", "userShifts", "userShifts.user"]
  });

  return data;
};

const findAll = async function findAll(): Promise<Shift[]> {
  const ShiftRepository = getRepository(Shift);

  const data: Shift[] = await ShiftRepository.find({
    order: {
      name: "ASC",
      id: "DESC",
    },
  });

  return data;
}

const create = async function create(
  data: Shift
): Promise<Shift> {
  const ShiftRepository = getRepository(Shift);

  await ShiftRepository.save(data);

  return data;
};

const findByScheduleId = async function findByScheduleId(scheduleId: string): Promise<Shift[]> {

  const data: Shift[] = await getConnection()
    .createQueryBuilder()
    .select("shift")
    .from(Shift, "shift")
    .innerJoinAndSelect("shift.schedule", "workSchedule")
    .where("workSchedule.id = :id", { id: scheduleId })
    .getMany();

  // data.forEach((shift:Shift) => {

  //   if (!!shift.dateBegin && !!shift.dayOfWeek) {
  //     let dates = calculateDate.getEventsFormShift(
  //       shift.dateBegin,
  //       shift.dateEnd || calculateDate.dateAddYear(shift.dateBegin, 1),
  //       shift.dayOfWeek
  //     )
  //   }


  // })

  return data;
}

export default {
  create,
  findAll,
  findById,
  findByScheduleId
};
