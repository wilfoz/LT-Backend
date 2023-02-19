import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/shared/errors/types/NotFoundError';
import { CreateEquipmentDto } from '../dto/create-equipment.dto';
import { UpdateEquipmentDto } from '../dto/update-equipment.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class EquipmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEquipmentDto: CreateEquipmentDto) {
    const team = await this.prisma.team.findUnique({
      where: {
        name: createEquipmentDto.team,
      },
    });

    if (!team) {
      throw new NotFoundError('Team not found.');
    }

    const data: Prisma.EquipmentCreateInput = {
      ...createEquipmentDto,
      team: {
        connect: {
          name: team.name,
        },
      },
    };
    return this.prisma.equipment.create({
      data,
    });
  }

  findAll(pagination: { page: number; totalPerPage: number }) {
    return this.prisma.equipment.findMany({
      skip: pagination.page || 0,
      take: pagination.totalPerPage || 100,
      include: {
        team: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.equipment.findUnique({
      where: {
        id,
      },
      include: {
        team: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async update(id: number, updateEquipmentDto: UpdateEquipmentDto) {
    const team = await this.prisma.team.findUnique({
      where: {
        name: updateEquipmentDto.team,
      },
    });

    if (!team) {
      throw new NotFoundError('Team not found.');
    }

    const data: Prisma.EquipmentUpdateInput = {
      ...updateEquipmentDto,
      team: {
        connect: {
          name: team.name,
        },
      },
    };

    return this.prisma.equipment.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.equipment.delete({
      where: {
        id,
      },
    });
  }
}
