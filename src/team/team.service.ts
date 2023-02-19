import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamRepository } from './repository/team.repository';

@Injectable()
export class TeamService {
  constructor(private repository: TeamRepository) {}
  create(createTeamDto: CreateTeamDto) {
    return this.repository.create(createTeamDto);
  }

  findAll(pagination: { page: number; totalPerPage: number }) {
    return this.repository.findAll(pagination);
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return this.repository.update(id, updateTeamDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
