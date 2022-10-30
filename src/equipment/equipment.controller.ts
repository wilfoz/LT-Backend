import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EquipmentEntity } from './entities/equipment.entity';

@ApiTags('Equipment')
@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Post()
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }

  @ApiOkResponse({ type: EquipmentEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!', isArray: true })
  @Get()
  findAll() {
    return this.equipmentService.findAll();
  }

  @ApiOkResponse({ type: EquipmentEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentService.findOne(+id);
  }

  @ApiOkResponse({ type: EquipmentEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEquipmentDto: UpdateEquipmentDto,
  ) {
    return this.equipmentService.update(+id, updateEquipmentDto);
  }

  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentService.remove(+id);
  }
}
