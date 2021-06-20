import { insert_PunchLogs } from './../../controllers/attendance/punchLogController';

import PunchLog  from '../../models/attendance/punchLog'
import PunchLogRepository  from '../../repository/attendance/punchLogRepository'

const getById = (id: string) =>
  PunchLogRepository.findById(id)

const getAll = () =>
    PunchLogRepository.findAll()

const create = (PunchLog:PunchLog) =>
  PunchLogRepository.create(PunchLog)

  const insertItems = (PunchLog:PunchLog[]) =>
  PunchLogRepository.insertItems(PunchLog)
  
  
export default {
  getAll,
  getById,
  create,
  // insert_PunchLogs,
  insertItems
}