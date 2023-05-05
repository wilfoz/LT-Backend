/*
  Warnings:

  - You are about to drop the column `num` on the `ListConstruction` table. All the data in the column will be lost.
  - Added the required column `code` to the `ListConstruction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ListConstruction" DROP COLUMN "num",
ADD COLUMN     "code" INTEGER NOT NULL;
