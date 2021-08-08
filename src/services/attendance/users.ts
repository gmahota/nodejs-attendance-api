
import User  from '../../models/attendance/userAttendance'
import UserRepository  from '../../repository/attendance/userRepository'

interface Filter {
  groupId?: string;
  scheduleId?: number
}

const getById = (id:string) =>
    UserRepository.findById(id)

const getAll = (filter:Filter) =>
    UserRepository.findAll(filter)

const create = (item:User) =>
  UserRepository.create(item)

const getByScheduleId = (id: string) =>
UserRepository.findByScheduleId(id)

const getByUserGroup = (id: string) =>
UserRepository.findByGroupId(id)

const insertItems = (items:User[]) =>
  UserRepository.insertItems(items)


export default {
  getAll,
  getById,
  create,
  getByScheduleId,
  getByUserGroup,
  insertItems
}
