import {MigrationInterface, QueryRunner} from "typeorm";

export class fixFieldNameCity1664896078753 implements MigrationInterface {
    name = 'fixFieldNameCity1664896078753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "info_contact" RENAME COLUMN "cyty" TO "city"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "info_contact" RENAME COLUMN "city" TO "cyty"`);
    }

}
