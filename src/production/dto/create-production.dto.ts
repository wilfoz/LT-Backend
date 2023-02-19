import { ApiProperty } from '@nestjs/swagger';
import { STATUS_PRODUCTION } from '@prisma/client';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductionDto {
  @ApiProperty({
    description: 'Status da produção: programada ou executada ou em andamento',
  })
  @IsString()
  @IsNotEmpty()
  status: STATUS_PRODUCTION;

  @ApiProperty({
    description: 'Atividade realizada',
  })
  @IsString()
  @IsNotEmpty()
  task: string;

  @ApiProperty({
    description: 'Torre executada',
  })
  @IsString()
  @IsNotEmpty()
  tower: string;

  @ApiProperty({
    description: 'Equipe que realizou',
  })
  @IsString()
  @IsNotEmpty()
  team: string;

  @IsDateString()
  @IsNotEmpty()
  productionDate: Date;

  @IsString()
  startTimeOfDay: string;

  @IsString()
  endTimeOfDay: string;

  @IsString()
  comments: string;
}
