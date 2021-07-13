import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import User from "./user";
import Shift from "./shift";

@Entity("userShift")
export default class userShift {
    @PrimaryGeneratedColumn()
    id: number

    //@Column()
    //userId: number
    @ManyToOne(() => User, (item) => item.id)
    @JoinColumn({ name: 'userId' })
    user?: User;

    @Column({length: 50, nullable:true})
    userName?: string
    
    // @Column()
    // shiftId: number
    @ManyToOne(() => Shift, (item) => item.id)
    @JoinColumn({ name: 'shiftId' })
    shift?: Shift;

    @Column()
    groupId?: number

    @Column({ length: 50, nullable: false })
    groupName?: string

    @Column({ length: 20, nullable: false })
    status?: string

    @Column({ nullable: true })
    dateStart: Date

    @Column({ nullable: true })
    dateEnd: Date

}
