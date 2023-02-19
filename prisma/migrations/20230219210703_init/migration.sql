/*
  Warnings:

  - The `stage` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "STAGE" AS ENUM ('PRELIMINAR', 'CIVIL', 'MONTAGEM', 'LANCAMENTO');

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "stage",
ADD COLUMN     "stage" "STAGE" NOT NULL DEFAULT 'PRELIMINAR';
