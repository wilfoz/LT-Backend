import { ConflictError } from './ConflictError';
import { PrismaClientError } from './PrismaClientError';

export class UniqueConstraintError extends ConflictError {
  constructor(private e: PrismaClientError) {
    const uniqueField = e.meta.target;
    super(`A error with this ${uniqueField} already exists`);
  }
}
