import {MigrationInterface, QueryRunner} from "typeorm";

export class relationInfoContactAndCountry1664901076053 implements MigrationInterface {
    name = 'relationInfoContactAndCountry1664901076053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "info_contact" ADD "countryId" integer`);
        await queryRunner.query(`ALTER TABLE "info_contact" ADD CONSTRAINT "UQ_3f93c633900050782778a48fdca" UNIQUE ("countryId")`);
        await queryRunner.query(`ALTER TABLE "info_contact" ADD CONSTRAINT "FK_3f93c633900050782778a48fdca" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "info_contact" DROP CONSTRAINT "FK_3f93c633900050782778a48fdca"`);
        await queryRunner.query(`ALTER TABLE "info_contact" DROP CONSTRAINT "UQ_3f93c633900050782778a48fdca"`);
        await queryRunner.query(`ALTER TABLE "info_contact" DROP COLUMN "countryId"`);
    }

}
