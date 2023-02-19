import { Injectable } from '@nestjs/common';
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
    return this.prisma.listConstruction.create({
      data: createListConstructionDto,
    });
  }

  findAll(pagination: {
    page: number;
    totalPerPage: number;
  }): Promise<ListConstructionEntity[]> {
    return this.prisma.listConstruction.findMany({
      skip: pagination.page || 0,
      take: pagination.totalPerPage || 100,
    });
  }

  findOne(id: number): Promise<ListConstructionEntity> {
    return this.prisma.listConstruction.findUnique({
      where: {
        id,
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
