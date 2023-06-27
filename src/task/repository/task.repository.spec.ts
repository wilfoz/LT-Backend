/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient, STAGE, UNITY } from '@prisma/client';
import { TaskRepository } from './task.repository';

describe('TaskRepository', () => {
  let repository: TaskRepository;
  let prismaService: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    repository = module.get<TaskRepository>(TaskRepository);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should create new task', async () => {
    const mockedTask = {
      id: 1,
      name: 'test',
      code: 1,
      group: 'test',
      unity: UNITY.TORRE,
      total: 1,
      stage: STAGE.CIVIL,
      is_mapped: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // @ts-ignore
    prismaService.task.create.mockResolvedValue(mockedTask);

    const createTask = () => {
      return repository.create(mockedTask);
    };

    await expect(createTask()).resolves.toBe(mockedTask);
  });

  it('should find all tasks', async () => {
    const params = {
      page: 1,
      totalPerPage: 15,
    };

    const mockedTasks = [
      {
        id: 1,
        name: 'test',
        code: 1,
        group: 'test',
        unity: UNITY.TORRE,
        total: 1,
        stage: STAGE.CIVIL,
        is_mapped: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'test2',
        code: 12,
        group: 'test2',
        unity: UNITY.TORRE,
        total: 1,
        stage: STAGE.CIVIL,
        is_mapped: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // @ts-ignore
    prismaService.task.findMany.mockResolvedValue(mockedTasks);

    const findAllTasks = () => {
      return repository.findAll(params);
    };

    await expect(findAllTasks()).resolves.toBe(mockedTasks);
    await expect(findAllTasks()).resolves.toHaveLength(2);
  });

  it('should find one task', async () => {
    const mockedTask = {
      id: 1,
      name: 'test',
      code: 1,
      group: 'test',
      unity: UNITY.TORRE,
      total: 1,
      stage: STAGE.CIVIL,
      is_mapped: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // @ts-ignore
    prismaService.task.findUnique.mockResolvedValue(mockedTask);

    const findOneTask = () => {
      return repository.findOne(mockedTask.id);
    };

    await expect(findOneTask()).resolves.toBe(mockedTask);
  });

  it('should update task', async () => {
    const mockedTask = {
      id: 1,
      name: 'test',
      code: 1,
      group: 'test',
      unity: UNITY.TORRE,
      total: 1,
      stage: STAGE.CIVIL,
      is_mapped: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // @ts-ignore
    prismaService.task.update.mockResolvedValue(mockedTask);

    const updateTask = () => {
      return repository.update(1, mockedTask);
    };

    await expect(updateTask()).resolves.toBe(mockedTask);
  });

  it('should delete one task', async () => {
    const mockedTask = {
      id: 1,
      name: 'test',
      code: 1,
      group: 'test',
      unity: UNITY.TORRE,
      total: 1,
      stage: STAGE.CIVIL,
      is_mapped: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // @ts-ignore
    prismaService.task.delete.mockResolvedValue(mockedTask);

    const removeTask = () => {
      return repository.remove(mockedTask.id);
    };

    await expect(removeTask()).resolves.toBe(mockedTask);
  });
});
