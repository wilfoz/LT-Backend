/*
  Warnings:

  - You are about to drop the column `status_foundation_MCL` on the `Diagram` table. All the data in the column will be lost.
  - You are about to drop the column `status_foundation_MCR` on the `Diagram` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Diagram" DROP COLUMN "status_foundation_MCL",
DROP COLUMN "status_foundation_MCR",
ADD COLUMN     "status_foundation_MC" TEXT,
ADD COLUMN     "type_of_foundation_A" TEXT,
ADD COLUMN     "type_of_foundation_B" TEXT,
ADD COLUMN     "type_of_foundation_C" TEXT,
ADD COLUMN     "type_of_foundation_D" TEXT,
ADD COLUMN     "type_of_foundation_MC" TEXT;
