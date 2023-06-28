import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTowerDto } from '../dto/create-tower.dto';
import { TowerEntity } from '../entities/tower.entity';
import { UpdateTowerDto } from '../dto/update-tower.dto';

@Injectable()
export class TowerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTowerDto: CreateTowerDto): Promise<TowerEntity> {
    return this.prisma.tower.create({
      data: createTowerDto,
    });
  }

  findAll(pagination: {
    page: number;
    totalPerPage: number;
  }): Promise<TowerEntity[]> {
    return this.prisma.tower.findMany({
      skip: pagination.page || 0,
      take: pagination.totalPerPage || 100,
    });
  }

  findOne(id: number): Promise<TowerEntity> {
    return this.prisma.tower.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateTowerDto: UpdateTowerDto,
  ): Promise<TowerEntity> {
    return this.prisma.tower.update({
      where: {
        id,
      },
      data: updateTowerDto,
    });
  }

  remove(id: number) {
    return this.prisma.tower.delete({
      where: {
        id,
      },
    });
  }
}
