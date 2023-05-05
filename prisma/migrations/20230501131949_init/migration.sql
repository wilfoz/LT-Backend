/*
  Warnings:

  - Added the required column `is_mapped` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ListConstruction" ADD COLUMN     "type_of_foundation_A" TEXT,
ADD COLUMN     "type_of_foundation_B" TEXT,
ADD COLUMN     "type_of_foundation_C" TEXT,
ADD COLUMN     "type_of_foundation_D" TEXT,
ADD COLUMN     "type_of_foundation_MC" TEXT;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "is_mapped" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "Diagram" (
    "id" SERIAL NOT NULL,
    "listId" INTEGER NOT NULL,
    "status_preliminary_services" TEXT,
    "status_fundation_A" TEXT,
    "status_fundation_B" TEXT,
    "status_fundation_C" TEXT,
    "status_fundation_D" TEXT,
    "status_fundation_MCL" TEXT,
    "status_fundation_MCR" TEXT,
    "status_tower_assembly" TEXT,
    "status_cable_laying" TEXT,

    CONSTRAINT "Diagram_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Diagram_listId_key" ON "Diagram"("listId");

-- AddForeignKey
ALTER TABLE "Diagram" ADD CONSTRAINT "Diagram_listId_fkey" FOREIGN KEY ("listId") REFERENCES "ListConstruction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
