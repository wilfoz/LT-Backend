import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskRepository } from './repository/task.repository';

@Injectable()
export class TaskService {
  constructor(private repository: TaskRepository) {}
  create(createTaskDto: CreateTaskDto) {
    return this.repository.create(createTaskDto);
  }

  findAll(pagination: { page: number; totalPerPage: number }) {
    return this.repository.findAll(pagination);
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.repository.update(id, updateTaskDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
