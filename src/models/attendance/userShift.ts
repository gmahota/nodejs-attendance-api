import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import User from "./user";
import shift from "./shift";

@Entity("userShift")
export default class userShift {
    @PrimaryColumn()
    id: number

    @Column()
    userId: number

    @Column()
    shiftId: number

    @Column()
    groupId: number

    @Column({ length: 50, nullable: false })
    groupName: string

    @Column({ length: 1, nullable: false })
    status: string

    @Column({ nullable: true })
    dateStart: Date

    @Column({ nullable: true })
    dateEnd: Date

}
