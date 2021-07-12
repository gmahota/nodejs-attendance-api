import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import WorkSchedule from "./workSchedule";
import UserShift from "./userShift";

@Entity("shift")
export default class shift {
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

    @ManyToOne(() => WorkSchedule, (item) => item.id)
    @JoinColumn({ name: 'scheduleId' })
    schedule?: WorkSchedule;

    @OneToMany(() => UserShift, item => item.shift, {
        cascade: ['insert', 'update']
    })
    userShifts?: UserShift[]
}
