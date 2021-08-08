import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import User from "./userAttendance";
import Shift from "./shift";

@Entity("userShift")
export default class userShift {
    @PrimaryGeneratedColumn('increment')
    id: number

    @ManyToOne(() => User, (item) => item.id,{
      createForeignKeyConstraints: false
    })
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column({length: 100, nullable:true})
    name?: string

    @ManyToOne(() => Shift, (item) => item.id,{
      createForeignKeyConstraints: false
    })
    @JoinColumn({ name: 'shiftId' })
    shift: Shift;

    @Column({ nullable: true })
    groupId?: string

    @Column({ length: 50, nullable: true })
    groupName?: string

    @Column({ length: 20, nullable: true })
    status?: string

    @Column({ nullable: false })
    dateStart: Date

    @Column({ nullable: true })
    dateEnd?: Date

    @Column({ nullable: true })
    createdAt?: Date

    @Column({ nullable: true })
    updatedAt?: Date

}
