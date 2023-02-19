import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { UNITY, STAGE } from 'prisma/prisma-client';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Nome da atividade',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Unidade da atividade',
  })
  @IsNotEmpty()
  unity: UNITY;

  @ApiProperty({
    description: 'Etapa da atividade',
  })
  @IsString()
  @IsNotEmpty()
  stage: STAGE;
}
