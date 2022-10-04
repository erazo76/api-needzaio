import {MigrationInterface, QueryRunner} from "typeorm";

export class initInfoContact1664895539955 implements MigrationInterface {
    name = 'initInfoContact1664895539955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "info_contact" ("id" SERIAL NOT NULL, "address" character varying(60) NOT NULL, "cyty" character varying(50) NOT NULL, "phone" character varying(20) NOT NULL, "celPhone" character varying(20) NOT NULL, "emergencyName" character varying(100) NOT NULL, "emergencyPhone" character varying(20) NOT NULL, CONSTRAINT "PK_ef486820c646a6f61374736845a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "info_contact"`);
    }

}
