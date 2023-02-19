import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { NotFoundError } from 'src/shared/errors/types/NotFoundError';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductionDto } from '../dto/create-production.dto';
import { UpdateProductionDto } from '../dto/update-production.dto';

@Injectable()
export class ProductionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductionDto: CreateProductionDto) {
    const task = await this.prisma.task.findUnique({
      where: {
        name: createProductionDto.task,
      },
    });
    if (!task) {
      throw new NotFoundError('Task not found.');
    }

    const list = await this.prisma.listConstruction.findUnique({
      where: {
        tower: createProductionDto.tower,
      },
    });

    if (!list) {
      throw new NotFoundError('List not found.');
    }

    const team = await this.prisma.team.findUnique({
      where: {
        name: createProductionDto.team,
      },
    });

    if (!team) {
      throw new NotFoundError('Team not found.');
    }

    const data: Prisma.ProductionCreateInput = {
      ...createProductionDto,
      task: {
        connect: {
          name: task.name,
        },
      },
      tower: {
        connect: {
          tower: list.tower,
        },
      },
      team: {
        connect: {
          name: team.name,
        },
      },
    };
    return this.prisma.production.create({
      data,
    });
  }

  findAll(pagination: { page: number; totalPerPage: number }) {
    return this.prisma.production.findMany({
      skip: pagination.page || 0,
      take: pagination.totalPerPage || 100,
      include: {
        task: {
          select: {
            name: true,
            unity: true,
            stage: true,
          },
        },
        tower: {
          select: {
            tower: true,
          },
        },
        team: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.production.findUnique({
      where: {
        id,
      },
      include: {
        task: {
          select: {
            name: true,
            unity: true,
            stage: true,
          },
        },
        tower: {
          select: {
            tower: true,
            type: true,
            locality: true,
            coordinates: true,
            forward: true,
            height: true,
            weight: true,
          },
        },
      },
    });
  }

  async update(id: number, updateProductionDto: UpdateProductionDto) {
    const task = await this.prisma.task.findUnique({
      where: {
        name: updateProductionDto.task,
      },
    });

    if (!task) {
      throw new NotFoundError('Task not found.');
    }

    const list = await this.prisma.listConstruction.findUnique({
      where: {
        tower: updateProductionDto.tower,
      },
    });

    if (!list) {
      throw new NotFoundError('List not found.');
    }

    const team = await this.prisma.team.findUnique({
      where: {
        name: updateProductionDto.team,
      },
    });

    if (!team) {
      throw new NotFoundError('Team not found.');
    }
    const data: Prisma.ProductionUpdateInput = {
      ...updateProductionDto,
      task: {
        connect: {
          name: task.name,
        },
      },
      tower: {
        connect: {
          tower: list.tower,
        },
      },
      team: {
        connect: {
          name: team.name,
        },
      },
    };
    return this.prisma.production.update({
      where: {
        id,
      },
      data,
      include: {
        task: {
          select: {
            name: true,
          },
        },
        tower: {
          select: {
            tower: true,
            type: true,
          },
        },
        team: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.production.delete({
      where: {
        id,
      },
    });
  }
}
