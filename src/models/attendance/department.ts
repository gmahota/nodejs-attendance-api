import { Entity, Column,PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";

@Entity("department")
export default class Department {
    @PrimaryColumn({length: 50 })
    id: string;

    @Column({length: 50, nullable:false})
    name: string
}
