import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { EmployeeEntity } from '../../employee/entities/employee.entity';
import { EquipmentEntity } from '../../equipment/entities/equipment.entity';

export class CreateTeamDto {
  @ApiProperty({
    description: 'Descrição de equipe',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Custo agregado de ferramental da equipe',
  })
  @IsNotEmpty()
  @IsNumber()
  tooling_cost: number;

  @ApiProperty({
    description: 'Funcionários',
  })
  employee: EmployeeEntity[];

  @ApiProperty({
    description: 'Equipamentos',
  })
  equipment: EquipmentEntity[];
}
