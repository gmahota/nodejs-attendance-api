import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUserAttendance1628432795440 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'userAttendance',
      columns: [
        {
          name: 'id',
          type: 'varchar(50)',
          isPrimary: true
        },
        {
          name: 'name',
          type: 'varchar(100)',
          isNullable: true
        },
        {
          name: 'userId',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'scheduleId',
          type: 'integer',
          isNullable: true
        },
        {
          name: 'groupId',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'departmentId',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'typeSchedule',
          type: 'integer',
          isNullable: true
        },
        {
          name: 'status',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'createdAt',
          type: 'datetime',
          isNullable: true
        },
        {
          name: 'updatedAt',
          type: 'datetime',
          isNullable: true
        }
      ]
      ,
      foreignKeys: [
        {
          name: 'User_Attendance',
          columnNames: ['userId'],
          referencedTableName: 'user',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        {
          name: 'User_Schuduler',
          columnNames: ['scheduleId'],
          referencedTableName: 'workSchedule',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        {
          name: 'User_Group',
          columnNames: ['groupId'],
          referencedTableName: 'userGroup',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("userAttendance");
  }

}
