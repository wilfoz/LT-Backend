/*
  Warnings:

  - You are about to drop the column `status_fundation_A` on the `Diagram` table. All the data in the column will be lost.
  - You are about to drop the column `status_fundation_B` on the `Diagram` table. All the data in the column will be lost.
  - You are about to drop the column `status_fundation_C` on the `Diagram` table. All the data in the column will be lost.
  - You are about to drop the column `status_fundation_D` on the `Diagram` table. All the data in the column will be lost.
  - You are about to drop the column `status_fundation_MCL` on the `Diagram` table. All the data in the column will be lost.
  - You are about to drop the column `status_fundation_MCR` on the `Diagram` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Diagram" DROP COLUMN "status_fundation_A",
DROP COLUMN "status_fundation_B",
DROP COLUMN "status_fundation_C",
DROP COLUMN "status_fundation_D",
DROP COLUMN "status_fundation_MCL",
DROP COLUMN "status_fundation_MCR",
ADD COLUMN     "status_foundation_A" TEXT,
ADD COLUMN     "status_foundation_B" TEXT,
ADD COLUMN     "status_foundation_C" TEXT,
ADD COLUMN     "status_foundation_D" TEXT,
ADD COLUMN     "status_foundation_MCL" TEXT,
ADD COLUMN     "status_foundation_MCR" TEXT;
