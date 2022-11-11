-- CreateEnum
CREATE TYPE "WEATHER" AS ENUM ('BOM', 'NUBLADO', 'CHUVA');

-- AlterTable
ALTER TABLE "Production" ADD COLUMN     "weather" "WEATHER" NOT NULL DEFAULT 'BOM';
