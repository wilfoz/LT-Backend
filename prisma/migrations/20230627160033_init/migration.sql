/*
  Warnings:

  - You are about to drop the column `status_vegetal_supression` on the `Diagram` table. All the data in the column will be lost.
  - You are about to drop the `ListConstruction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Diagram" DROP CONSTRAINT "Diagram_listId_fkey";

-- DropForeignKey
ALTER TABLE "Production" DROP CONSTRAINT "Production_listId_fkey";

-- AlterTable
ALTER TABLE "Diagram" DROP COLUMN "status_vegetal_supression",
ADD COLUMN     "status_vegetal_suppression" TEXT;

-- DropTable
DROP TABLE "ListConstruction";

-- CreateTable
CREATE TABLE "Tower" (
    "id" SERIAL NOT NULL,
    "code" INTEGER NOT NULL,
    "tower" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "locality" TEXT NOT NULL,
    "coordinates" TEXT NOT NULL,
    "forward" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "excavation_volume" DOUBLE PRECISION,
    "concrete_volume" DOUBLE PRECISION,
    "backfill_volume" DOUBLE PRECISION,
    "steel_volume" DOUBLE PRECISION,
    "type_of_foundation_A" TEXT,
    "type_of_foundation_B" TEXT,
    "type_of_foundation_C" TEXT,
    "type_of_foundation_D" TEXT,
    "type_of_foundation_MC" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "embargo" "EMBARGOES" NOT NULL DEFAULT 'LIBERADO',

    CONSTRAINT "Tower_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tower_tower_key" ON "Tower"("tower");

-- AddForeignKey
ALTER TABLE "Diagram" ADD CONSTRAINT "Diagram_listId_fkey" FOREIGN KEY ("listId") REFERENCES "Tower"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Production" ADD CONSTRAINT "Production_listId_fkey" FOREIGN KEY ("listId") REFERENCES "Tower"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
