import User from "../../models/admin/user";
import { getRepository,getConnection } from "typeorm";
import Group from "./userGroupRepository";
import UserAttendance from "../../models/attendance/userAttendance";

interface Filter {
  department?:string,
  group?: string;
  scheduleId?: number
}

const findById = async function findById(id: string): Promise<UserAttendance> {
  const UserRepository = getRepository(UserAttendance);

  const data: UserAttendance = await UserRepository.findOneOrFail({
      where: {id: id },
      relations: ["userGroup","schedule","user"]
    });

  return data;
};

const findAll = async function findAll(filter:Filter): Promise<UserAttendance[]> {
  const UserRepository = getRepository(UserAttendance);

  const data: UserAttendance[] = await UserRepository.find({
    relations: ["userGroup","schedule","user"],
    order: {
      name: "ASC",
      id: "DESC",
    },
  });

  return data;
}

const findByScheduleId = async function findAll(id: string): Promise<UserAttendance[]> {

  const users: UserAttendance[]= await getConnection()
    .createQueryBuilder()
    .select("user")
    .from(UserAttendance, "user")
    .innerJoinAndSelect("user.schedule","schedule")
    .where("schedule.id = :id", { id: id })
    .getMany();

  return users;


}

const findByGroupId = async function findByGroupId(id: string): Promise<UserAttendance[]> {


  const users: UserAttendance[]= await getConnection()
    .createQueryBuilder()
    .select("user")
    .from(UserAttendance, "user")
    .innerJoinAndSelect("user.userGroup","userGroup")
    .where("userGroup.id = :id", { id: id })
    .getMany();

  return users;
};

const create = async function create(
  data: UserAttendance
): Promise<UserAttendance> {
  const UserRepository = getRepository(User);
  const UserAtt =getRepository(UserAttendance);

  if(!!data.userGroup?.id){
    data.userGroup = await Group.findById(data.userGroup?.id.toString()||"0")
    await UserRepository.save(data)
    //console.log(data[i])
  }

  let user = await UserRepository.findOne({
    where:{id: data.id }
  })

  if(user === undefined)
  {
    user =await UserRepository.save({
      id:data.id,
      name:data.name
    });
  }

  data.user = user;

  await UserAtt.save(data);

  return data;
};

const insertItems = async function insertItems(
  data: UserAttendance[]
): Promise<UserAttendance[]> {

  const UserRepository = getRepository(User);
  const UserAttRepository =getRepository(UserAttendance);

  const groups = await Group.findAll();

  for(var i = 0; i < data.length; i++){

    if(!!data[i].userGroup?.id){
      let ugroup: any= groups.find( p=> p.id === data[i].userGroup?.id)

      data[i].userGroup = ugroup

      let user = await UserRepository.findOne({
        where:{id: data[i].id }
      })

      if(user === undefined)
      {
        user =await UserRepository.save({
          id:data[i].id,
          name:data[i].name
        });
      }

      data[i].user = user;
    }
  }

  await UserAttRepository.save(data);

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
