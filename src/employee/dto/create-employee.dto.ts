import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { LEADERS, STATUS_EMPLOYEE } from 'prisma/prisma-client';

export class CreateEmployeeDto {
  @ApiProperty({
    description: 'Matrícula do funcionário',
  })
  @IsNotEmpty()
  @IsString()
  registration: string;

  @ApiProperty({
    description: 'Nome completo do funcionário',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Função do funcionário',
  })
  @IsNotEmpty()
  @IsString()
  occupation: string;

  @ApiProperty({
    description: 'Salário base do funcionário',
  })
  @IsNotEmpty()
  @IsNumber()
  base_salary: number;

  @ApiProperty({
    description: 'Se o funcionário e um lider de equipe',
  })
  @IsString()
  leadership: LEADERS;

  @ApiProperty({
    description: 'Status do funcionário',
  })
  @IsString()
  status: STATUS_EMPLOYEE;

  @ApiProperty({
    description: 'Equipe do funcionário',
  })
  @IsNotEmpty()
  @IsString()
  team: string;
}
