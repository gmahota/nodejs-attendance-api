import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createUser1628415236905 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
        name:'user',
        columns:[
            {
                name:'id',
                type:'varchar(50)',
                isPrimary:true
            },
            {
                name:'username',
                type:'varchar(50)',
                isNullable:true
            },
            {
                name:'name',
                type:'varchar(100)',
                isNullable:true
            },
            {
                name:'firstName',
                type:'varchar(50)',
                isNullable:true
            },
            {
                name:'lastName',
                type:'varchar(50)',
                isNullable:true
            },
            {
                name:'phoneNumber',
                type:'varchar(20)',
                isNullable:true
            },
            {
                name:'email',
                type:'varchar(50)',
                isNullable:true
            },
            {
                name:'password',
                type:'varchar(50)',
                isNullable:true
            },
            {
                name:'confirmPassword',
                type:'bit',
                isNullable:true
            },
            {
                name:'inactive',
                type:'bit',
                isNullable:true
            },
            {
                name:'country',
                type:'varchar(10)',
                isNullable:true
            },
            {
                name:'createdAt',
                type:'datetime',
                isNullable:true
            },
            {
                name:'updatedAt',
                type:'datetime',
                isNullable:true
            }
        ]
    }))
}

public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
}

}
