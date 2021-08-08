import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import WorkSchedule from "./workSchedule";
import UserShift from "./userShift";

@Entity("shift")
export default class Shift {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 50, nullable: false })
  name: string

  @Column({ length: 50, nullable: true })
  description?: string

  @Column({ length: 50, nullable: true })
  type?: string

  @Column({ length: 50, nullable: true })
  status?: string

  @Column()
  minTimeIn: Date

  @Column()
  timeIn: Date

  @Column()
  timeOut: Date

  @Column()
  maxTimeOut: Date

  @Column()
  gracePeriod: Date

  @Column()
  dayOfWeek: number

  @Column({ length: 100, nullable: true })
  repeat?: string

  @Column()
  dateBegin?: Date

  @Column()
  dateEnd?: Date

  @Column({ nullable: true })
  createdAt?: Date

  @Column({ nullable: true })
  updatedAt?: Date

  @ManyToOne(() => WorkSchedule, (item) => item.id,{
    createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'scheduleId' })
  schedule?: WorkSchedule;

  @OneToMany(() => UserShift, item => item.shift, {
    cascade: ['insert', 'update']
  })
  userShifts?: UserShift[]
}
