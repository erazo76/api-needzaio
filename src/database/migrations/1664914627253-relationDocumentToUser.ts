import {MigrationInterface, QueryRunner} from "typeorm";

export class relationDocumentToUser1664914627253 implements MigrationInterface {
    name = 'relationDocumentToUser1664914627253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" ADD "typeDocumentId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "document" ADD "userId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "document" ADD CONSTRAINT "UQ_7424ddcbdf1e9b067669eb0d3fd" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "document" ADD CONSTRAINT "FK_f31aaf44fd0441ab9aa0c289c6c" FOREIGN KEY ("typeDocumentId") REFERENCES "type_document"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "document" ADD CONSTRAINT "FK_7424ddcbdf1e9b067669eb0d3fd" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" DROP CONSTRAINT "FK_7424ddcbdf1e9b067669eb0d3fd"`);
        await queryRunner.query(`ALTER TABLE "document" DROP CONSTRAINT "FK_f31aaf44fd0441ab9aa0c289c6c"`);
        await queryRunner.query(`ALTER TABLE "document" DROP CONSTRAINT "UQ_7424ddcbdf1e9b067669eb0d3fd"`);
        await queryRunner.query(`ALTER TABLE "document" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "document" DROP COLUMN "typeDocumentId"`);
    }

}
