import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTeamDto } from '../dto/create-team.dto';
import { TeamEntity } from '../entities/team.entity';

@Injectable()
export class TeamRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createTeamDto: CreateTeamDto) {
    return this.prisma.team.create({
      data: createTeamDto,
    });
  }

  findAll() {
    return this.prisma.team.findMany({
      include: {
        equipment: true,
        employee: true,
      },
    });
  }
}
