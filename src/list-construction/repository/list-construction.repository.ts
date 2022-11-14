import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { NotFoundError } from 'src/shared/errors/types/NotFoundError';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateListConstructionDto } from '../dto/create-list-construction.dto';
import { UpdateListConstructionDto } from '../dto/update-list-construction.dto';
import { ListConstructionEntity } from '../entities/list-construction.entity';

@Injectable()
export class ListConstructionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createListConstructionDto: CreateListConstructionDto,
  ): Promise<ListConstructionEntity> {
    const { statusId } = createListConstructionDto;
    delete createListConstructionDto.statusId;

    const embargo = await this.prisma.status.findFirst({
      where: {
        id: statusId,
      },
    });

    if (!embargo) {
      throw new NotFoundError('Embargo not found.');
    }
    const data: Prisma.ListConstructionCreateInput = {
      ...createListConstructionDto,
      status: {
        connect: {
          id: statusId,
        },
      },
    };
    return this.prisma.listConstruction.create({
      data,
    });
  }

  findAll(pagination: {
    page: number;
    totalPerPage: number;
  }): Promise<ListConstructionEntity[]> {
    return this.prisma.listConstruction.findMany({
      skip: pagination.page || 1,
      take: pagination.totalPerPage || 5,
      include: {
        status: true,
      },
    });
  }

  findOne(id: number): Promise<ListConstructionEntity> {
    return this.prisma.listConstruction.findUnique({
      where: {
        id,
      },
      include: {
        status: {
          select: {
            id: true,
            status: true,
          },
        },
      },
    });
  }

  async update(
    id: number,
    updateListConstructionDto: UpdateListConstructionDto,
  ): Promise<ListConstructionEntity> {
    return this.prisma.listConstruction.update({
      where: {
        id,
      },
      data: updateListConstructionDto,
    });
  }

  remove(id: number) {
    return this.prisma.listConstruction.delete({
      where: {
        id,
      },
    });
  }
}
