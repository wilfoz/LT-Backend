import { Task } from '@prisma/client';
import { UNITY, STAGE } from 'prisma/prisma-client';
export class TaskEntity implements Task {
  id: number;
  name: string;
  code: number;
  group: string;
  unity: UNITY;
  total: number;
  stage: STAGE;
  is_mapped: boolean;
  createdAt: Date;
  updatedAt: Date;
}
