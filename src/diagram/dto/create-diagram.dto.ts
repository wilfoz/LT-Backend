import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDiagramDto {
  @ApiProperty({
    description: 'Torre',
  })
  @IsNotEmpty()
  @IsString()
  tower: string;

  @ApiProperty({
    description: 'Status da atividade de topografia',
  })
  @IsString()
  status_topography: string;

  @ApiProperty({
    description: 'Status da atividade de supressão vegetal',
  })
  @IsString()
  status_vegetal_suppression: string;

  @ApiProperty({
    description: 'Tipo da fundação da Perna/Estai A',
  })
  @IsString()
  type_of_foundation_A: string;

  @ApiProperty({
    description: 'Tipo da fundação da Perna/Estai B',
  })
  @IsString()
  type_of_foundation_B: string;

  @ApiProperty({
    description: 'Tipo da fundação da Perna/Estai C',
  })
  @IsString()
  type_of_foundation_C: string;

  @ApiProperty({
    description: 'Tipo da fundação da Perna/Estai D',
  })
  @IsString()
  type_of_foundation_D: string;

  @ApiProperty({
    description: 'Tipo da fundação do mastro central ',
  })
  @IsString()
  type_of_foundation_MC: string;

  @ApiProperty({
    description: 'Status da fundação da Perna/Estai A',
  })
  @IsString()
  status_foundation_A: string;

  @ApiProperty({
    description: 'Status da fundação da Perna/Estai B',
  })
  @IsString()
  status_foundation_B: string;

  @ApiProperty({
    description: 'Status da fundação da Perna/Estai C',
  })
  @IsString()
  status_foundation_C: string;

  @ApiProperty({
    description: 'Status da fundação da Perna/Estai D',
  })
  @IsString()
  status_foundatioMn_D: string;

  @ApiProperty({
    description: 'Status da fundação do MC.',
  })
  @IsString()
  status_foundation_MC: string;

  @ApiProperty({
    description: 'Status da etapa de montagem.',
  })
  @IsString()
  status_tower_assembly: string;

  @ApiProperty({
    description: 'Status da etapa de lançamento',
  })
  @IsString()
  status_cable_laying: string;
}
