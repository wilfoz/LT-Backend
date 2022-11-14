import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TeamEntity } from './entities/team.entity';

@ApiTags('Team')
@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @ApiOkResponse({ type: TeamEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!', isArray: true })
  @Get()
  findAll(@Query() { page, totalPerPage }) {
    return this.teamService.findAll({
      page: +page,
      totalPerPage: +totalPerPage,
    });
  }

  @ApiOkResponse({ type: TeamEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @ApiOkResponse({ type: TeamEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(+id, updateTeamDto);
  }

  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }
}
