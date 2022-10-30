import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskEntity } from '../entities/task.entity';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Task')
@Injectable()
export class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  create(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    return this.prisma.task.create({
      data: createTaskDto,
    });
  }

  @ApiOkResponse({ type: TaskEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!', isArray: true })
  findAll(): Promise<TaskEntity[]> {
    return this.prisma.task.findMany();
  }

  @ApiOkResponse({ type: TaskEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  findOne(id: number) {
    return this.prisma.task.findUnique({
      where: {
        id,
      },
    });
  }

  @ApiOkResponse({ type: TaskEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: {
        id,
      },
      data: updateTaskDto,
    });
  }

  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  remove(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
