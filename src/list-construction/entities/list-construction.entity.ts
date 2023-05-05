import { EMBARGOES, ListConstruction } from '@prisma/client';

export class ListConstructionEntity implements ListConstruction {
  id: number;
  code: number;
  tower: string;
  type: string;
  locality: string;
  coordinates: string;
  forward: number;
  height: number;
  weight: number;
  excavation_volume: number;
  concrete_volume: number;
  backfill_volume: number;
  steel_volume: number;
  type_of_foundation_A: string;
  type_of_foundation_B: string;
  type_of_foundation_C: string;
  type_of_foundation_D: string;
  type_of_foundation_MC: string;
  embargo: EMBARGOES;
  createdAt: Date;
  updatedAt: Date;
}
