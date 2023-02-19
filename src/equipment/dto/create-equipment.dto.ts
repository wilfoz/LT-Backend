import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { STATUS_EQUIPMENT } from 'prisma/prisma-client';

export class CreateEquipmentDto {
  @ApiProperty({
    description: 'Modelo do equipamento/ veículo',
  })
  @IsNotEmpty()
  @IsString()
  model: string;

  @ApiProperty({
    description: 'Fabricante do equipamento/ veículo',
  })
  @IsNotEmpty()
  @IsString()
  manufacturer: string;

  @ApiProperty({
    description: 'Placa do equipamento/ veículo',
  })
  @IsNotEmpty()
  @IsString()
  license_plate: string;

  @ApiProperty({
    description: 'Fornecedor do equipamento/ veículo',
  })
  @IsNotEmpty()
  @IsString()
  provider: string;

  @ApiProperty({
    description: 'Custo do equipamento/ veículo',
  })
  @IsNotEmpty()
  @IsNumber()
  cost: number;

  @ApiProperty({
    description: 'Status do equipamento/ veículo',
  })
  @IsString()
  status: STATUS_EQUIPMENT;

  @ApiProperty({
    description: 'Equipe do equipamento/ veículo',
  })
  @IsNotEmpty()
  @IsString()
  team: string;
}
