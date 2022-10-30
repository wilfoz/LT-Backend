import { ListConstruction } from '@prisma/client';

export class ListConstructionEntity implements ListConstruction {
  id: number;
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
  createdAt: Date;
  updatedAt: Date;
  statusId: number;
}
