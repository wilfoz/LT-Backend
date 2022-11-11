import { Production, WEATHER } from '@prisma/client';

export class ProductionEntity implements Production {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  weather: WEATHER;
  taskId: number;
  listId: number;
  teamId: number;
}
