import { Production } from '@prisma/client';

export class ProductionEntity implements Production {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  taskId: number;
  listId: number;
  teamId: number;
}
