import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"
import User from "../admin/user"
import WorkSchedule from "../attendance/workSchedule";
import userDepartment from "./department";
import userGroup from "../attendance/userGroup";

enum TypeSchedule{
  User = 1,
  Group = 2
}

@Entity("userAttendance")
export default class UserAttendance {

  @PrimaryColumn({ length: 50 })
  id:string;

  @Column({ length: 100 , nullable: true})
  name?:string;

  @Column({ type:"integer" , nullable: true })
  typeSchedule?: TypeSchedule

  @ManyToOne(() => User, (item) => item.id)
  @JoinColumn({ name: 'userId' })
  user?: User;

  @ManyToOne(() => userGroup, (item) => item.id)
  @JoinColumn({ name: 'groupId' })
  userGroup?: userGroup;

  @ManyToOne(() => WorkSchedule, (item) => item.id)
  @JoinColumn({ name: 'scheduleId' })
  schedule?: WorkSchedule;

  @ManyToOne(() => userDepartment, (item) => item.id)
  @JoinColumn({ name: 'departmentId' })
  department?: userDepartment;

  @Column({ length: 50, nullable: true })
  status?:string;

  @Column({ nullable: true })
  createdAt?: Date

  @Column({ nullable: true })
  updatedAt?: Date


}
