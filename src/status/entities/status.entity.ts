import { Status } from 'prisma/prisma-client';
export class StatusEntity implements Status {
  id: number;
  status: string;
}
