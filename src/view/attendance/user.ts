import User from "../../models/attendance/userAttendance"


export default {
  render(item: User) {
    return {
      id:item.id,
      name:item.name,
      scheduleByUserOrGroup:item.typeSchedule,
      userGroup:item.userGroup?.name,
      schedule:item.schedule?.name
    };
  },
  renderMany(items: User[]) {
    return items?.map(item =>this.render(item));
  },
};
