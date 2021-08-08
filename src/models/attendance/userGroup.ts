import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import User from "./userAttendance";
import WorkSchedule from "./workSchedule";

@Entity("userGroup")
export default class userGroup {
    @PrimaryColumn({ length: 50, nullable: false })
    id: string

    @Column({ length: 50, nullable: false })
    name: string

    @Column({ nullable: true })
    createdAt?: Date

    @Column({ nullable: true })
    updatedAt?: Date

    @Column({ nullable: true })
    parent_id?: number

    @ManyToOne(() => WorkSchedule, (item) => item.id,{
      createForeignKeyConstraints: false
    })
    @JoinColumn({ name: 'scheduleId' })
    schedule?: WorkSchedule;

    Users?: User[]

    Parent?:userGroup

    children?:userGroup[]

    totalUsers?:number

}
