import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"

@Entity("user")
export default class User {

  @PrimaryColumn({ length: 50 })
  id: string;

  @Column({ length: 50, nullable: true })
  username?: string;

  @Column({ length: 100, nullable: true })
  name?: string;

  @Column({ length: 50, nullable: true })
  firstName?: string;

  @Column({ length: 50, nullable: true })
  lastName?: string;

  @Column({ length: 50, nullable: true })
  phoneNumber?: string;

  @Column({ length: 50, nullable: true })
  email?: string;

  @Column({ length: 50, nullable: true })
  password?: string;

  @Column()
  confirmPassword?: boolean;

  @Column()
  inactive?: boolean;

  @Column()
  country: string;

  @Column({ nullable: true })
  createdAt?: Date

  @Column({ nullable: true })
  updatedAt?: Date

  constructor() {
    this.firstName = ""
    this.email = ""
    this.phoneNumber = ""
    this.confirmPassword = false
    this.country = "Moz"
  }
}

export {
  //UserSchema,
  User,
};
