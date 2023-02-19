-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CONTROLLER', 'ADMIN', 'ROOT');

-- CreateEnum
CREATE TYPE "UNITY" AS ENUM ('TORRE', 'KM', 'UNIDADE');

-- CreateEnum
CREATE TYPE "STATUS_EQUIPMENT" AS ENUM ('ATIVO', 'MANUTENCAO');

-- CreateEnum
CREATE TYPE "STATUS_PRODUCTION" AS ENUM ('EXECUTADO', 'PROGRAMADO', 'ANDAMENTO');

-- CreateEnum
CREATE TYPE "STATUS_EMPLOYEE" AS ENUM ('ATIVO', 'TREINAMENTO', 'AFASTADO');

-- CreateEnum
CREATE TYPE "LEADERS" AS ENUM ('SIM', 'NAO');

-- CreateEnum
CREATE TYPE "EMBARGOES" AS ENUM ('LIBERADO', 'PROJETO', 'FUNDIARIO', 'ARQUEOLOGIA');

-- CreateTable
CREATE TABLE "Production" (
    "id" SERIAL NOT NULL,
    "comments" TEXT,
    "status" "STATUS_PRODUCTION" NOT NULL DEFAULT 'PROGRAMADO',
    "taskId" INTEGER NOT NULL,
    "listId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    "productionDate" TIMESTAMP(3) NOT NULL,
    "startTimeOfDay" TIMESTAMP(3) NOT NULL,
    "endTimeOfDay" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Production_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "unity" "UNITY" NOT NULL DEFAULT 'TORRE',
    "stage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListConstruction" (
    "id" SERIAL NOT NULL,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "embargo" "EMBARGOES" NOT NULL DEFAULT 'LIBERADO',

    CONSTRAINT "ListConstruction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tooling_cost" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipment" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "license_plate" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "status" "STATUS_EQUIPMENT" NOT NULL DEFAULT 'ATIVO',
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "registration" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "base_salary" INTEGER NOT NULL,
    "leadership" "LEADERS" DEFAULT 'NAO',
    "status" "STATUS_EMPLOYEE" NOT NULL DEFAULT 'ATIVO',
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CONTROLLER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_name_key" ON "Task"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ListConstruction_tower_key" ON "ListConstruction"("tower");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Equipment_license_plate_key" ON "Equipment"("license_plate");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_registration_key" ON "Employee"("registration");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_name_key" ON "Employee"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "Production" ADD CONSTRAINT "Production_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Production" ADD CONSTRAINT "Production_listId_fkey" FOREIGN KEY ("listId") REFERENCES "ListConstruction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Production" ADD CONSTRAINT "Production_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
