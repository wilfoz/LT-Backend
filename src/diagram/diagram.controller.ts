import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DiagramService } from './diagram.service';
import { DiagramEntity } from './entities/diagram.entity';

@ApiTags('diagram')
@Controller('diagram')
export class DiagramController {
  constructor(private readonly diagramService: DiagramService) {}

  @ApiOkResponse({ type: DiagramEntity, isArray: true })
  @Get()
  findAll() {
    return this.diagramService.findAll();
  }
}
