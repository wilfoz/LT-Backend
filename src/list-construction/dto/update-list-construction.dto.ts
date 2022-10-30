import { PartialType } from '@nestjs/mapped-types';
import { CreateListConstructionDto } from './create-list-construction.dto';

export class UpdateListConstructionDto extends PartialType(
  CreateListConstructionDto,
) {}
