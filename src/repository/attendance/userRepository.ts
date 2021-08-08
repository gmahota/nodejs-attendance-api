import User from "../../models/attendance/userAttendance";
import { getRepository,getConnection,FindConditions } from "typeorm";
import Group from "./userGroupRepository";
import userGroup from "../../models/attendance/userGroup";
interface Filter {
  department?:string,
  group?: string;
}

const findById = async function findById(id: string): Promise<User> {
  const UserRepository = getRepository(User);

  const data: User = await UserRepository.findOneOrFail({
      where: {id: id },
      relations: ["userGroup","schedule","department"]
    });

  return data;
};

const findAll = async function findAll(filter:Filter): Promise<User[]> {
  const UserRepository = getRepository(User);

  const data: User[] = await UserRepository.find({
    where: "",
    relations: ["userGroup","schedule","department"],
    order: {
      name: "ASC",
      id: "DESC",
    },
  });

  return data;
}

const findByScheduleId = async function findAll(id: string): Promise<User[]> {

  const users: User[]= await getConnection()
    .createQueryBuilder()
    .select("user")
    .from(User, "user")
    .innerJoinAndSelect("user.schedule","schedule")
    .where("schedule.id = :id", { id: id })
    .getMany();

  return users;


}

const findByGroupId = async function findByGroupId(id: number): Promise<User[]> {


  const users: User[]= await getConnection()
    .createQueryBuilder()
    .select("user")
    .from(User, "user")
    .innerJoinAndSelect("user.userGroup","userGroup")
    .where("userGroup.id = :id", { id: id })
    .getMany();

  return users;
};

const create = async function create(
  data: User
): Promise<User> {
  const UserRepository = getRepository(User);

  if(!!data.userGroup?.id){
    data.userGroup = await Group.findById(data.userGroup?.id.toString()||"0")
    await UserRepository.save(data)
    //console.log(data[i])
  }

  await UserRepository.save(data);

  return data;
};

const insertItems = async function insertItems(
  data: User[]
): Promise<User[]> {

  const UserRepository = getRepository(User);

  const groups = await Group.findAll();

  for(var i = 0; i < data.length; i++){

    if(!!data[i].userGroup?.id){
      let ugroup: any= groups.find( p=> p.id === data[i].userGroup?.id)

      data[i].userGroup = ugroup
    }
  }

  await UserRepository.save(data);

  return data;
};

export default {
  create,
  findAll,
  findById,
  findByScheduleId,
  findByGroupId,
  insertItems
};
