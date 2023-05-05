import { ApiProperty } from '@nestjs/swagger';
import { EMBARGOES } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateListConstructionDto {
  @ApiProperty({
    description: 'Número sequencial da torre',
  })
  @IsNotEmpty()
  @IsNumber()
  code: number;

  @ApiProperty({
    description: 'Torre',
  })
  @IsString()
  tower: string;

  @ApiProperty({
    description: 'Tipo da estrutura',
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    description: 'Canteiro de apoio',
  })
  @IsString()
  @IsNotEmpty()
  locality: string;

  @ApiProperty({
    description: 'Coordenadas norte e este',
  })
  @IsString()
  @IsNotEmpty()
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

  @ApiProperty({
    description: 'Tipo de fundação Perna/ Estai A',
  })
  @IsString()
  type_of_foundation_A: string;

  @ApiProperty({
    description: 'Tipo de fundação Perna/ Estai B',
  })
  @IsString()
  type_of_foundation_B: string;

  @ApiProperty({
    description: 'Tipo de fundação Perna/ Estai C',
  })
  @IsString()
  type_of_foundation_C: string;

  @ApiProperty({
    description: 'Tipo de fundação Perna/ Estai D',
  })
  @IsString()
  type_of_foundation_D: string;

  @ApiProperty({
    description: 'Tipo de fundação Perna/ Estai MC',
  })
  @IsString()
  type_of_foundation_MC: string;

  @ApiProperty({
    description: 'Situação de embargos',
  })
  @IsString()
  embargo: EMBARGOES;
}
