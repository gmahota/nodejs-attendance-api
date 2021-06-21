
import UserGroup from '../../models/attendance/userGroup'
import User from '../../models/attendance/user'
import UserGroupRepository from '../../repository/attendance/userGroupRepository'
import UserRepository from '../../repository/attendance/userRepository'

const getById = (id: string) =>
  UserGroupRepository.findById(id)

const getAll = async (seeUsers: boolean = false): Promise<UserGroup[]> => {
  if (seeUsers === true) {
    let items: UserGroup[] = await UserGroupRepository.findAll()

    const users: User[] = await UserRepository.findAll({})

    for (var i = 0; i < items.length; i++) {

      items[i].Users = users.filter(p => p.userGroup?.id === items[i].id)
      items[i].totalUsers = items[i].Users?.length || 0
    }

    const itemsNode = (items: UserGroup[], id: any = null, link = 'parent_id'): UserGroup[] =>
      items
        .filter(item => item.parent_id === id)
        .map(item => ({ ...item, children: itemsNode(items, item.id) }));

    return itemsNode(items)
  } else {
    return await UserGroupRepository.findAll()
  }
}

const create = (item: UserGroup) =>
  UserGroupRepository.create(item)

const getByScheduleId = (id: string) =>
  UserGroupRepository.findByScheduleId(id)

const insertItems = (items: UserGroup[]) =>
  UserGroupRepository.insertItems(items)

export default {
  getAll,
  getById,
  create,
  getByScheduleId,
  insertItems
}