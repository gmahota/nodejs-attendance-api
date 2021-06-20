import { Entity, Column, PrimaryColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";

@Entity("punchLog")
export default class PunchLog {
  @PrimaryColumn()
  id: number;

  @Column({length: 50, nullable:true })
  code?:string;

  @Column({length: 50, nullable:false })
  userId: string

  @Column({length: 100, nullable:false })
  userName: string

  @Column({length: 50, nullable:true })
  userGroup?:string
  
  @Column({ nullable:false })
  date: Date

  @Column({ length: 200, nullable: true })
  device?: string

  @Column({ length: 100, nullable: true })
  deviceId?: string

  @Column({ length: 20, nullable: true })
  userDefinedSchedulerId?: string

  @Column({ length: 20, nullable: true })
  schedulerId?: string

  @Column({ length: 50, nullable: true })
  userDefinedSchedulerName?: string

  @Column({ length: 50, nullable: true })
  exception?: string

  @Column({ length: 20 ,nullable: true })
  punchType?: string

  @Column({nullable: true })
  shiftSupposedTimeIn?: Date

  @Column({nullable: true })
  shiftSupposedTimeOut?: Date

  @Column({nullable: true })
  shiftSupposedGracePerior?: Date

  @Column({ length: 50, nullable: true })
  shiftDescription?: string

  @Column({ nullable:true})
  createdAt?: Date

  @Column({ nullable:true})
  updatedAt?: Date

  @Column({ length: 50, nullable: true })
  json?: string
}
