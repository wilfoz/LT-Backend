import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamEntity } from './entities/team.entity';
import { TeamRepository } from './repository/team.repository';

@Injectable()
export class TeamService {
  constructor(private repository: TeamRepository) {}
  create(createTeamDto: CreateTeamDto) {
    return this.repository.create(createTeamDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
