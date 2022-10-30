import { Employee, STATUS_EMPLOYEE } from '@prisma/client';

export class EmployeeEntity implements Employee {
  id: number;
  registration: string;
  name: string;
  occupation: string;
  base_salary: number;
  status: STATUS_EMPLOYEE;
  teamId: number;
}
