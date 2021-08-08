import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsershift1628432821762 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'userShift',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'userId',
          type: 'varchar(50)'
        },
        {
          name: 'shiftId',
          type: 'int'
        },
        {
          name: 'groupId',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'groupName',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'status',
          type: 'varchar(20)',
          isNullable: true
        },
        {
          name: 'dateStart',
          type: 'datetime'
        },
        {
          name: 'dateEnd',
          type: 'datetime'
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
        },
        {
          name: 'scheduleId',
          type: 'integer',
          isNullable: true
        }
      ]
      ,
      foreignKeys: [
        {
          name: 'UserAttendance_Shift',
          columnNames: ['userId'],
          referencedTableName: 'userAttendance',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        {
          name: 'Shift_UserAttendance',
          columnNames: ['shiftId'],
          referencedTableName: 'shift',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("userShift");
  }

}
