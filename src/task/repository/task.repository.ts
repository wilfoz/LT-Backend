import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskEntity } from '../entities/task.entity';
import { UpdateTaskDto } from '../dto/update-task.dto';
@Injectable()
export class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    return this.prisma.task.create({
      data: createTaskDto,
    });
  }

  findAll(pagination: {
    page: number;
    totalPerPage: number;
  }): Promise<TaskEntity[]> {
    return this.prisma.task.findMany({
      skip: pagination.page || 0,
      take: pagination.totalPerPage || 100,
    });
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: {
        id,
      },
      data: updateTaskDto,
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
