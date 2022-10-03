import {MigrationInterface, QueryRunner} from "typeorm";

export class oneToOneDocumentAndUser1664830410067 implements MigrationInterface {
    name = 'oneToOneDocumentAndUser1664830410067'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "document" ADD CONSTRAINT "UQ_7424ddcbdf1e9b067669eb0d3fd" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "document" ADD CONSTRAINT "FK_7424ddcbdf1e9b067669eb0d3fd" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" DROP CONSTRAINT "FK_7424ddcbdf1e9b067669eb0d3fd"`);
        await queryRunner.query(`ALTER TABLE "document" DROP CONSTRAINT "UQ_7424ddcbdf1e9b067669eb0d3fd"`);
        await queryRunner.query(`ALTER TABLE "document" DROP COLUMN "userId"`);
    }

}
