import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TowerService } from './tower.service';
import { CreateTowerDto } from './dto/create-tower.dto';
import { TowerEntity } from './entities/tower.entity';
import { UpdateTowerDto } from './dto/update-tower.dto';

@ApiTags('Tower')
@Controller('Tower')
export class TowerController {
  constructor(private readonly towerService: TowerService) {}

  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Post()
  create(@Body() createTowerDto: CreateTowerDto) {
    return this.towerService.create(createTowerDto);
  }

  @ApiOkResponse({ type: TowerEntity, isArray: true })
  @Get()
  findAll(@Query() { page, totalPerPage }) {
    return this.towerService.findAll({
      page: +page,
      totalPerPage: +totalPerPage,
    });
  }

  @ApiOkResponse({ type: TowerEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.towerService.findOne(id);
  }

  @ApiOkResponse({ type: TowerEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTowerDto: UpdateTowerDto,
  ) {
    return this.towerService.update(id, updateTowerDto);
  }

  @ApiOkResponse({ type: TowerEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.towerService.remove(id);
  }
}
