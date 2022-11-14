/*
  Warnings:

  - The `leadership` column on the `Employee` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "LEADERS" AS ENUM ('SIM', 'NAO');

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "leadership",
ADD COLUMN     "leadership" "LEADERS" DEFAULT 'NAO';
