import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createPunchlog1628434050622 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'punchLog',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true
        },
        {
          name: 'code',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'userId',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'userName',
          type: 'varchar(100)',
          isNullable: true
        },
        {
          name: 'userGroup',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'date',
          type: 'datetime'
        },
        {
          name: 'device',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'deviceId',
          type: 'varchar(100)',
          isNullable: true
        },
        {
          name: 'userDefinedSchedulerId',
          type: 'varchar(20)',
          isNullable: true
        },
        {
          name: 'userDefinedSchedulerName',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'exception',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'punchType',
          type: 'varchar(20)',
          isNullable: true
        },
        {
          name: 'shiftId',
          type: 'int',
          isNullable: true
        },
        {
          name: 'shiftSupposedTimeIn',
          type: 'datetime',
          isNullable: true
        },
        {
          name: 'shiftSupposedTimeOut',
          type: 'datetime',
          isNullable: true
        },
        {
          name: 'minTimeIn',
          type: 'datetime',
          isNullable: true
        },
        {
          name: 'maxTimeOut',
          type: 'datetime',
          isNullable: true
        },
        {
          name: 'shiftSupposedGracePerior',
          type: 'datetime',
          isNullable: true
        },
        {
          name: 'shiftDescription',
          type: 'nvarchar(50)',
          isNullable: true
        },
        {
          name: 'json',
          type: 'text',
          isNullable: true
        },
        {
          name: 'updateType',
          type: 'nvarchar(20)',
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
          name: 'PunchLog_User',
          columnNames: ['userId'],
          referencedTableName: 'userAttendance',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        {
          name: 'PunchLog_Shift',
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
    await queryRunner.dropTable("punchLog");
  }

}
