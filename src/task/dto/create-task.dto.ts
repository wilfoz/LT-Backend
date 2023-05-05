import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';
import { UNITY, STAGE } from 'prisma/prisma-client';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Nome da atividade',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Código da atividade',
  })
  @IsNotEmpty()
  @IsNumber()
  code: number;

  @ApiProperty({
    description: 'Nome do grupo da atividade',
  })
  @IsNotEmpty()
  @IsString()
  group: string;

  @ApiProperty({
    description: 'Unidade da atividade',
  })
  @IsNotEmpty()
  unity: UNITY;

  @ApiProperty({
    description: 'Total previsto para atividade',
  })
  @IsNotEmpty()
  @IsNumber()
  total: number;

  @ApiProperty({
    description: 'Etapa da atividade',
  })
  @IsString()
  @IsNotEmpty()
  stage: STAGE;

  @ApiProperty({
    description: 'Indica se a atividade será mapeada para o diagrama',
  })
  @IsBoolean()
  @IsNotEmpty()
  is_mapped: boolean;
}
