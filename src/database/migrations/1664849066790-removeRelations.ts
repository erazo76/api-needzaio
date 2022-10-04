import {MigrationInterface, QueryRunner} from "typeorm";

export class removeRelations1664849066790 implements MigrationInterface {
    name = 'removeRelations1664849066790'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" DROP CONSTRAINT "FK_7424ddcbdf1e9b067669eb0d3fd"`);
        await queryRunner.query(`ALTER TABLE "document" DROP CONSTRAINT "FK_f31aaf44fd0441ab9aa0c289c6c"`);
        await queryRunner.query(`ALTER TABLE "document" DROP CONSTRAINT "UQ_7424ddcbdf1e9b067669eb0d3fd"`);
        await queryRunner.query(`ALTER TABLE "document" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "document" DROP CONSTRAINT "UQ_f31aaf44fd0441ab9aa0c289c6c"`);
        await queryRunner.query(`ALTER TABLE "document" DROP COLUMN "typeDocumentId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" ADD "typeDocumentId" integer`);
        await queryRunner.query(`ALTER TABLE "document" ADD CONSTRAINT "UQ_f31aaf44fd0441ab9aa0c289c6c" UNIQUE ("typeDocumentId")`);
        await queryRunner.query(`ALTER TABLE "document" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "document" ADD CONSTRAINT "UQ_7424ddcbdf1e9b067669eb0d3fd" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "document" ADD CONSTRAINT "FK_f31aaf44fd0441ab9aa0c289c6c" FOREIGN KEY ("typeDocumentId") REFERENCES "type_document"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "document" ADD CONSTRAINT "FK_7424ddcbdf1e9b067669eb0d3fd" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
