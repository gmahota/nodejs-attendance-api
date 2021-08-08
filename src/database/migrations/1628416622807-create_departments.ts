import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createDepartments1628416622807 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'department',
      columns: [
        {
          name: 'id',
          type: 'varchar(50)',
          isPrimary: true
        },
        {
          name: 'username',
          type: 'varchar(50)',
          isNullable: true
        }]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("department");
  }

}
