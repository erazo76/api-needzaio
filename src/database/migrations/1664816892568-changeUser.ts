import {MigrationInterface, QueryRunner} from "typeorm";

export class changeUser1664816892568 implements MigrationInterface {
    name = 'changeUser1664816892568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "timeCreate"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "timeCreate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "timeCreate"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "timeCreate" character varying NOT NULL`);
    }

}
