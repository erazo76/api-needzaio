import {MigrationInterface, QueryRunner} from "typeorm";

export class correctionInfoContactAndCountry1664907493237 implements MigrationInterface {
    name = 'correctionInfoContactAndCountry1664907493237'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "info_contact" DROP CONSTRAINT "FK_3f93c633900050782778a48fdca"`);
        await queryRunner.query(`ALTER TABLE "info_contact" ALTER COLUMN "countryId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "info_contact" ADD CONSTRAINT "FK_3f93c633900050782778a48fdca" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "info_contact" DROP CONSTRAINT "FK_3f93c633900050782778a48fdca"`);
        await queryRunner.query(`ALTER TABLE "info_contact" ALTER COLUMN "countryId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "info_contact" ADD CONSTRAINT "FK_3f93c633900050782778a48fdca" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
