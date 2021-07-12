
import { Router } from "express";

import {
  get_all_PunchLogs,
  get_PunchLog,
  create_PunchLog,
  insert_PunchLogs,
} from "../controllers/attendance/punchLogController";

import {
  get_all_PunchDailyCards,
  get_PunchDailyCard,
  get_Report
} from "../controllers/attendance/punchDailyCardController";

import {
  get_all_Users,
  get_User,
  create_User,
  create_Users  
} from "../controllers/attendance/userController";

import {
  get_all_UserGroups,
  get_UserGroup,
  create_UserGroup,
  edit_UserGroup,
  create_UserGroups  
} from "../controllers/attendance/userGroupController"
  ;

  import {
  get_all_Shifts,
  get_Shift,
  create_Shift,
  edit_Shift,
  create_UserShifts
} from "../controllers/attendance/shiftController";

import {
  get_all_UserShifts,
  get_UserShift,
  create_UserShift,
  edit_UserShift
} from "../controllers/attendance/userShiftController";

import {
  get_all_WorkSchedules,
  get_WorkSchedule,
  create_WorkSchedule,
  edit_WorkSchedule,
  get_Workschedule_Users,
  get_Workschedule_Groups,
  get_Workschedule_Shifts
} from "../controllers/attendance/workScheduleController";

import {
  get_all_UserDepartments,
  get_UserDepartment,
  create_UserDepartment
} from "../controllers/attendance/userDepartmentController"
  ;

const attendanceRouter = Router();

attendanceRouter
  .get("/users", get_all_Users)
  .get("/user/:id", get_User)
  .post("/user/", create_User)
  .post("/users/", create_Users);
  
attendanceRouter
  .get("/shifts", get_all_Shifts)
  .get("/shift/:id", get_Shift)
  .post("/shift", create_Shift)
  .post("/shift/:id", edit_Shift)
  .post("/shift/:id/userShifts", create_UserShifts);

attendanceRouter
  .get("/workschedules", get_all_WorkSchedules)
  .get("/workschedule/:id", get_WorkSchedule)
  .get("/workschedule/:id/users", get_Workschedule_Users)
  .get("/workschedule/:id/groups", get_Workschedule_Groups)
  .get("/workschedule/:id/shifts", get_Workschedule_Shifts)
  .post("/workschedule", create_WorkSchedule)
  .post("/workschedule/:id", edit_WorkSchedule);

attendanceRouter
  .get("/usergroups", get_all_UserGroups)
  .get("/usergroup/:id", get_UserGroup)
  .post("/usergroup/", create_UserGroup)
  .post("/usergroup/:id", edit_UserGroup)
  .post("/usergroups/", create_UserGroups);
  

attendanceRouter
  .get("/punchLogs", get_all_PunchLogs)
  .get("/punchLog/:id", get_PunchLog)
  .post("/punchLog/", create_PunchLog)
  .post("/punchLogs/", insert_PunchLogs);
  

attendanceRouter
  .post("/punchDailyCards", get_all_PunchDailyCards)
  .get("/punchDailyCard/:id", get_PunchDailyCard)
  .post("/punchDailyCards/report", get_Report);

  attendanceRouter
  .get("/userDepartments", get_all_UserDepartments)
  .get("/userDepartment/:id", get_UserDepartment)
  .post("/userDepartment/", create_UserDepartment);

  attendanceRouter
  .get("/userShifts", get_all_UserShifts)
  .get("/userShift/:id", get_UserShift)
  .post("/userShift/", create_UserShift)
  .post("/userShift/:id", edit_UserShift);

export default attendanceRouter;
