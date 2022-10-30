import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStatusDto {
  @ApiProperty({
    description: 'Matrícula do funcionário',
  })
  @IsString()
  @IsNotEmpty()
  status: string;
}
