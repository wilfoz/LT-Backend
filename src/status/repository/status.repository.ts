import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateStatusDto } from '../dto/create-status.dto';
import { StatusEntity } from '../entities/status.entity';

@Injectable()
export class StatusRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createStatusDto: CreateStatusDto): Promise<StatusEntity> {
    return this.prisma.status.create({
      data: createStatusDto,
    });
  }

  findAll(pagination: {
    page: number;
    totalPerPage: number;
  }): Promise<StatusEntity[]> {
    return this.prisma.status.findMany({
      skip: pagination.page || 1,
      take: pagination.totalPerPage || 5,
    });
  }
}
