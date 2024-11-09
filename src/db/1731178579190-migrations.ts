import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1731178579190 implements MigrationInterface {
    name = 'migrations1731178579190'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" datetime2 CONSTRAINT "DF_0f5cbe00928ba4489cc7312573b" DEFAULT getdate()`);
        await queryRunner.query(`ALTER TABLE "user_posts" ALTER COLUMN "removedAt" timestamp`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_posts" ALTER COLUMN "removedAt" timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "DF_0f5cbe00928ba4489cc7312573b"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
    }

}
