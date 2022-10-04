import {MigrationInterface, QueryRunner} from "typeorm";

export class initCountry1664899721838 implements MigrationInterface {
    name = 'initCountry1664899721838'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "country" ("id" SERIAL NOT NULL, "countryCode" character varying(4) NOT NULL, "countryName" character varying(100) NOT NULL, CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "country"`);
    }

}
