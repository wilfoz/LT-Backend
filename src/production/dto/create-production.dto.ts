import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductionDto {
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
}
