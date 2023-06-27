import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

describe('TaskController', () => {
  let controller: TaskController;
  let service: DeepMockProxy<TaskService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService],
    })
      .overrideProvider(TaskService)
      .useValue(mockDeep<TaskService>())
      .compile();

    controller = module.get<TaskController>(TaskController);
    service = module.get(TaskService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling create method', () => {
    const dto = new CreateTaskDto();
    expect(controller.create(dto)).not.toEqual(null);
    expect(service.create).toHaveBeenCalled();
  });

  it('calling findAll method', () => {
    const params = {
      page: 0,
      totalPerPage: 0,
    };

    expect(controller.findAll(params)).not.toEqual(null);
    expect(service.findAll).toHaveBeenCalledWith(params);
  });

  it('calling findOne method', () => {
    const id = '1';
    expect(controller.findOne(id)).not.toEqual(null);
    expect(service.findOne).toHaveBeenCalledWith(+id);
  });

  it('calling findOne update', () => {
    const dto = new UpdateTaskDto();
    const id = '1';
    expect(controller.update(id, dto)).not.toEqual(null);
    expect(service.update).toHaveBeenCalledWith(+id, dto);
  });

  it('calling findOne delete', () => {
    const id = '1';
    expect(controller.remove(id)).not.toEqual(null);
    expect(service.remove).toHaveBeenCalledWith(+id);
  });
});
