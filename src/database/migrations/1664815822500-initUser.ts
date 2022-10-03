import {MigrationInterface, QueryRunner} from "typeorm";

export class initUser1664815822500 implements MigrationInterface {
    name = 'initUser1664815822500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "lastName" character varying NOT NULL, "name" character varying NOT NULL, "isMilitar" boolean NOT NULL, "timeCreate" character varying NOT NULL, "isTemporal" boolean NOT NULL, "userName" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "emailVerified" boolean NOT NULL, "verificationToken" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
