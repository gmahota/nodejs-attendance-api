import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createUsergroup1628418097015 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'userGroup',
      columns: [
        {
          name: 'id',
          type: 'varchar(50)',
          isPrimary: true
        },
        {
          name: 'name',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'parent_id',
          type: 'varchar(50)',
          isNullable: true
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
        },
        {
          name:'scheduleId',
          type:'integer',
          isNullable:true
        }
      ],
      foreignKeys: [{
        name:'UserGroupSchedule',
        columnNames:['scheduleId'],
        referencedTableName:'workSchedule',
        referencedColumnNames:['id'],
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      }
      ]
    }),true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("userGroup");
  }

}
