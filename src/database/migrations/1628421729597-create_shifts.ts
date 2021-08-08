import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createShifts1628421729597 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'shift',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar(50)'
        },
        {
          name: 'description',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'type',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'status',
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'minTimeIn',
          type: 'datetime'
        },
        {
          name: 'timeIn',
          type: 'datetime'
        },
        {
          name: 'timeOut',
          type: 'datetime'
        },
        {
          name: 'maxTimeOut',
          type: 'datetime'
        },
        {
          name: 'gracePeriod',
          type: 'datetime'
        },
        {
          name: 'dayOfWeek',
          type: 'integer'
        },
        {
          name: 'repeat',
          type: 'varchar(100)',
          isNullable: true
        },
        {
          name: 'dateBegin',
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
      foreignKeys: [{
        name: 'ShiftWorkSchedule',
        columnNames: ['scheduleId'],
        referencedTableName: 'workSchedule',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
      ]
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("shift");
  }

}
