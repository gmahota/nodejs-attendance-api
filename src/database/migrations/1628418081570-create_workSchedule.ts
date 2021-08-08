import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createWorkSchedule1628418081570 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'workSchedule',
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
          type: 'varchar(50)',
          isNullable: true
        },
        {
          name: 'type',
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
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("workSchedule");
  }

}
