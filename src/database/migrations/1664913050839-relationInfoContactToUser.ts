import {MigrationInterface, QueryRunner} from "typeorm";

export class relationInfoContactToUser1664913050839 implements MigrationInterface {
    name = 'relationInfoContactToUser1664913050839'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "info_contact" ADD "userId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "info_contact" ADD CONSTRAINT "UQ_a5b08c1dd5f60c713e9c2648a2d" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "info_contact" DROP CONSTRAINT "FK_3f93c633900050782778a48fdca"`);
        await queryRunner.query(`ALTER TABLE "info_contact" DROP CONSTRAINT "UQ_3f93c633900050782778a48fdca"`);
        await queryRunner.query(`ALTER TABLE "info_contact" ADD CONSTRAINT "FK_3f93c633900050782778a48fdca" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "info_contact" ADD CONSTRAINT "FK_a5b08c1dd5f60c713e9c2648a2d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "info_contact" DROP CONSTRAINT "FK_a5b08c1dd5f60c713e9c2648a2d"`);
        await queryRunner.query(`ALTER TABLE "info_contact" DROP CONSTRAINT "FK_3f93c633900050782778a48fdca"`);
        await queryRunner.query(`ALTER TABLE "info_contact" ADD CONSTRAINT "UQ_3f93c633900050782778a48fdca" UNIQUE ("countryId")`);
        await queryRunner.query(`ALTER TABLE "info_contact" ADD CONSTRAINT "FK_3f93c633900050782778a48fdca" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "info_contact" DROP CONSTRAINT "UQ_a5b08c1dd5f60c713e9c2648a2d"`);
        await queryRunner.query(`ALTER TABLE "info_contact" DROP COLUMN "userId"`);
    }

}
