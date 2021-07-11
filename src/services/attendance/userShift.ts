
import UserShift  from '../../models/attendance/userShift'
import UserShiftRepository  from '../../repository/attendance/userShiftRepository'

const getById = (id:string) =>
    UserShiftRepository.findById(id)

const getAll = () =>
    UserShiftRepository.findAll()

const create = (item:UserShift) =>
  UserShiftRepository.create(item)
  
export default {
  getAll,
  getById,
  create
}