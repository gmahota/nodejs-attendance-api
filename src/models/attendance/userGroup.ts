import { Entity, Column,PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import WorkSchedule from "./workSchedule";

@Entity("userGroup")
export default class userGroup {
    @PrimaryColumn()
    id: number

    @Column({length: 50, nullable:false})
    name: string

    @Column({ nullable:true})
    createdAt?:Date

    @Column({ nullable:true})
    updatedAt?:Date

    @Column({ nullable:true})
    parent_id?:number

    @ManyToOne(() => WorkSchedule, (item) => item.id)
    @JoinColumn({name:'scheduleId'})
    schedule?: WorkSchedule;

}
