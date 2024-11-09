import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1731178004364 implements MigrationInterface {
    name = 'migrations1731178004364'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_profiles" ("id" int NOT NULL IDENTITY(1,1), "firstName" nvarchar(255) NOT NULL, "lastName" nvarchar(255) NOT NULL, "age" int NOT NULL, "dob" nvarchar(255) NOT NULL, "userId" bigint, CONSTRAINT "PK_1ec6662219f4605723f1e41b6cb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" bigint NOT NULL IDENTITY(1,1), "username" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, "createdAt" datetime NOT NULL, "authStrategy" nvarchar(255), CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_posts" ("id" int NOT NULL IDENTITY(1,1), "title" nvarchar(255) NOT NULL, "description" nvarchar(255) NOT NULL, "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_ff8e8c37a4e360d04caefb4d078" DEFAULT getdate(), "removedAt" timestamp, "userId" bigint, CONSTRAINT "PK_f41cce0f182d1f3765c5d990b38" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_profiles" ADD CONSTRAINT "FK_8481388d6325e752cd4d7e26c6d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_posts" ADD CONSTRAINT "FK_9152833f45dc4ce32a5b0b016c2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_posts" DROP CONSTRAINT "FK_9152833f45dc4ce32a5b0b016c2"`);
        await queryRunner.query(`ALTER TABLE "user_profiles" DROP CONSTRAINT "FK_8481388d6325e752cd4d7e26c6d"`);
        await queryRunner.query(`DROP TABLE "user_posts"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "user_profiles"`);
    }

}
