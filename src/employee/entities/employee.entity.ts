import { Employee, LEADERS, STATUS_EMPLOYEE } from '@prisma/client';

export class EmployeeEntity implements Employee {
  id: number;
  registration: string;
  name: string;
  occupation: string;
  base_salary: number;
  leadership: LEADERS;
  status: STATUS_EMPLOYEE;
  teamId: number;
}
