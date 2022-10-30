import { Task } from '@prisma/client';
import { UNITY } from 'prisma/prisma-client';
export class TaskEntity implements Task {
  id: number;
  name: string;
  unity: UNITY;
  stage: string;
  createdAt: Date;
  updatedAt: Date;
}
