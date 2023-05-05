import { Production, STATUS_PRODUCTION, WEATHER } from '@prisma/client';
export class ProductionEntity implements Production {
  id: number;
  comments: string;
  status: STATUS_PRODUCTION;
  weather: WEATHER;
  taskId: number;
  listId: number;
  teamId: number;
  productionDate: Date;
  startTimeOfDay: string;
  endTimeOfDay: string;
}
