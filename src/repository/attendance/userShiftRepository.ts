import UserShift from "../../models/attendance/userShift";
import { getRepository,getConnection } from "typeorm";

interface Key {
  id?: any;
}

const findById = async function findById(id: string): Promise<UserShift> {
  const UserShiftRepository = getRepository(UserShift);

  const data: UserShift = await UserShiftRepository.findOneOrFail({
      where: {id: id }      
    });

  return data;
};

const findAll = async function findAll(): Promise<UserShift[]> {
  const UserShiftRepository = getRepository(UserShift);
  console.log('************************ Entramos async_function do userShiftRepository no findAllDentroDORepository e o valor do repo eh '+UserShiftRepository);

  const data: UserShift[] = await UserShiftRepository.find({
    order: {      
      id: "DESC",
    },
  });

  return data;
}

const create = async function create(
  data: UserShift
): Promise<UserShift> {
  const UserShiftRepository = getRepository(UserShift);
  console.log('************************ Entramos no create do UserShiftRepository e o valor do repo eh '+UserShiftRepository);
  await UserShiftRepository.save(data);

  return data;
};



export default {
  create,
  findAll,
  findById,
  
};
