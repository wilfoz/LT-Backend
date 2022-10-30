import { Team } from '@prisma/client';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { EquipmentEntity } from 'src/equipment/entities/equipment.entity';
export class TeamEntity implements Team {
  id: number;
  name: string;
  tooling_cost: number;
  employee: EmployeeEntity[];
  equipment: EquipmentEntity[];
}
