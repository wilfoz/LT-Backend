/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { ListConstructionRepository } from './list-construction.repository';
import { ListConstructionEntity } from '../entities/list-construction.entity';

describe('ListConstructionRepository', () => {
  let repository: ListConstructionRepository;
  let prismaService: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListConstructionRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    repository = module.get<ListConstructionRepository>(
      ListConstructionRepository,
    );
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should create new list construction', async () => {
    const mockedListConstruction = new ListConstructionEntity();

    // @ts-ignore
    prismaService.listConstruction.create.mockResolvedValue(
      mockedListConstruction,
    );

    const createList = () => {
      return repository.create(mockedListConstruction);
    };

    await expect(createList()).resolves.toBe(mockedListConstruction);
  });

  it('should find all list construction', async () => {
    const params = {
      page: 1,
      totalPerPage: 15,
    };
    const listConstruction1 = new ListConstructionEntity();
    const listConstruction2 = new ListConstructionEntity();
    const mockedListConstructions = [listConstruction1, listConstruction2];

    // @ts-ignore
    prismaService.listConstruction.findMany.mockResolvedValue(
      mockedListConstructions,
    );

    const findAllList = () => {
      return repository.findAll(params);
    };

    await expect(findAllList()).resolves.toBe(mockedListConstructions);
    await expect(findAllList()).resolves.toHaveLength(2);
  });

  it('should find one listConstruction', async () => {
    const mockedListConstruction = new ListConstructionEntity();

    prismaService.listConstruction.findUnique.mockResolvedValue(
      mockedListConstruction,
    );

    const findOneList = () => {
      return repository.findOne(mockedListConstruction.id);
    };

    await expect(findOneList()).resolves.toBe(mockedListConstruction);
  });

  it('should update listConstruction', async () => {
    const mockedListConstruction = new ListConstructionEntity();

    prismaService.listConstruction.update.mockResolvedValue(
      mockedListConstruction,
    );

    const updateList = () => {
      return repository.update(1, mockedListConstruction);
    };

    await expect(updateList()).resolves.toBe(mockedListConstruction);
  });

  it('should delete one listConstruction', async () => {
    const mockedListConstruction = new ListConstructionEntity();

    prismaService.listConstruction.delete.mockResolvedValue(
      mockedListConstruction,
    );

    const removeList = () => {
      return repository.remove(mockedListConstruction.id);
    };

    await expect(removeList()).resolves.toBe(mockedListConstruction);
  });
});
