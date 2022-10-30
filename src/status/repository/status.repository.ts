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

  findAll(): Promise<StatusEntity[]> {
    return this.prisma.status.findMany();
  }
}
