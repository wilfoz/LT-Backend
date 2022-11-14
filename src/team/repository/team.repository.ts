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

  findAll(pagination: { page: number; totalPerPage: number }) {
    return this.prisma.team.findMany({
      skip: pagination.page || 1,
      take: pagination.totalPerPage || 5,
      include: {
        equipment: true,
        employee: true,
      },
    });
  }
}
