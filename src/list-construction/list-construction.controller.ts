import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { CreateListConstructionDto } from './dto/create-list-construction.dto';
import { UpdateListConstructionDto } from './dto/update-list-construction.dto';
import { ListConstructionEntity } from './entities/list-construction.entity';
import { ListConstructionService } from './list-construction.service';

@ApiTags('List Construction')
@Controller('list-construction')
export class ListConstructionController {
  constructor(
    private readonly listConstructionService: ListConstructionService,
  ) {}

  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Post()
  create(@Body() createListConstructionDto: CreateListConstructionDto) {
    return this.listConstructionService.create(createListConstructionDto);
  }

  @ApiOkResponse({ type: ListConstructionEntity, isArray: true })
  @Get()
  findAll() {
    return this.listConstructionService.findAll();
  }

  @ApiOkResponse({ type: ListConstructionEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.listConstructionService.findOne(id);
  }

  @ApiOkResponse({ type: ListConstructionEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateListConstructionDto: UpdateListConstructionDto,
  ) {
    return this.listConstructionService.update(id, updateListConstructionDto);
  }

  @ApiOkResponse({ type: ListConstructionEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.listConstructionService.remove(id);
  }
}
