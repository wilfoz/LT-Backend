import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';
import { Team } from '@prisma/client';

@Injectable()
export class TeamRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createTeamDto: CreateTeamDto): Promise<Team> {
    return this.prisma.team.create({
      data: createTeamDto,
    });
  }

  findAll(pagination: { page: number; totalPerPage: number }): Promise<Team[]> {
    return this.prisma.team.findMany({
      skip: pagination.page || 0,
      take: pagination.totalPerPage || 100,
      include: {
        equipment: true,
        employee: true,
      },
    });
  }

  findOne(id: number): Promise<Team> {
    return this.prisma.team.findUnique({
      where: {
        id,
      },
      include: {
        employee: {
          select: {
            name: true,
            occupation: true,
          },
        },
        equipment: {
          select: {
            model: true,
          },
        },
      },
    });
  }

  async update(id: number, updateTeamDto: UpdateTeamDto): Promise<Team> {
    return this.prisma.team.update({
      where: {
        id,
      },
      data: updateTeamDto,
    });
  }

  remove(id: number): Promise<Team> {
    return this.prisma.team.delete({
      where: {
        id,
      },
    });
  }
}
