import {MigrationInterface, QueryRunner} from "typeorm";

export class initTypeDocument1664847168243 implements MigrationInterface {
    name = 'initTypeDocument1664847168243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "type_document" ("id" SERIAL NOT NULL, "nameTypeDocument" character varying(50) NOT NULL, CONSTRAINT "PK_a89fb9f22e15824ce89c11c5a1b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "document" ADD "typeDocumentId" integer`);
        await queryRunner.query(`ALTER TABLE "document" ADD CONSTRAINT "UQ_f31aaf44fd0441ab9aa0c289c6c" UNIQUE ("typeDocumentId")`);
        await queryRunner.query(`ALTER TABLE "document" ADD CONSTRAINT "FK_f31aaf44fd0441ab9aa0c289c6c" FOREIGN KEY ("typeDocumentId") REFERENCES "type_document"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" DROP CONSTRAINT "FK_f31aaf44fd0441ab9aa0c289c6c"`);
        await queryRunner.query(`ALTER TABLE "document" DROP CONSTRAINT "UQ_f31aaf44fd0441ab9aa0c289c6c"`);
        await queryRunner.query(`ALTER TABLE "document" DROP COLUMN "typeDocumentId"`);
        await queryRunner.query(`DROP TABLE "type_document"`);
    }

}
