import {MigrationInterface, QueryRunner} from "typeorm";

export class seed1621173935027 implements MigrationInterface {
    name = 'seed1621173935027'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "done" boolean NOT NULL DEFAULT false, "created" TIMESTAMP NOT NULL, "updated" TIMESTAMP NOT NULL, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo"`);
    }

}
