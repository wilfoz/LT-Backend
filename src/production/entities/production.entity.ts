import { Production, STATUS_PRODUCTION } from '@prisma/client';
export class ProductionEntity implements Production {
  id: number;
  comments: string;
  status: STATUS_PRODUCTION;
  taskId: number;
  listId: number;
  teamId: number;
  productionDate: Date;
  startTimeOfDay: string;
  endTimeOfDay: string;
}
