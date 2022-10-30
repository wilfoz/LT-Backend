import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateListConstructionDto {
  @ApiProperty({
    description: 'Torre',
  })
  @IsString()
  @IsString()
  tower: string;

  @ApiProperty({
    description: 'Tipo da estrutura',
  })
  @IsString()
  @IsString()
  type: string;

  @ApiProperty({
    description: 'Canteiro de apoio',
  })
  @IsString()
  @IsString()
  locality: string;

  @ApiProperty({
    description: 'Coordenadas norte e este',
  })
  @IsString()
  @IsString()
  coordinates: string;

  @ApiProperty({
    description: 'Vão a vante da torre',
  })
  @IsNumber()
  @IsNotEmpty()
  forward: number;

  @ApiProperty({
    description: 'Altura util',
  })
  @IsNumber()
  @IsNotEmpty()
  height: number;

  @ApiProperty({
    description: 'Peso da torre em toneladas',
  })
  @IsNumber()
  @IsNotEmpty()
  weight: number;

  @ApiProperty({
    description: 'Volume de escavação',
  })
  @IsNumber()
  excavation_volume?: number;

  @ApiProperty({
    description: 'Volume de concreto',
  })
  @IsNumber()
  concrete_volume?: number;

  @ApiProperty({
    description: 'Volume de reaterro',
  })
  @IsNumber()
  backfill_volume?: number;

  @ApiProperty({
    description: 'Volume de aço',
  })
  @IsNumber()
  steel_volume?: number;

  @IsNumber()
  statusId: number;
}
