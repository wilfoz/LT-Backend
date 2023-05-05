/*
  Warnings:

  - You are about to drop the column `status_preliminary_services` on the `Diagram` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Diagram" DROP COLUMN "status_preliminary_services",
ADD COLUMN     "status_topography" TEXT,
ADD COLUMN     "status_vegetal_supression" TEXT;
