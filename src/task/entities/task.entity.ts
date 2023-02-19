import { Task } from '@prisma/client';
import { UNITY, STAGE } from 'prisma/prisma-client';
export class TaskEntity implements Task {
  id: number;
  name: string;
  unity: UNITY;
  stage: STAGE;
  createdAt: Date;
  updatedAt: Date;
}
