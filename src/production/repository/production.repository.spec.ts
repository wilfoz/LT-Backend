/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { ProductionRepository } from './production.repository';
import { mockedProductions, mockedTask, mockedTeam, mockedTower } from './mock';

describe('ListConstructionRepository', () => {
  let repository: ProductionRepository;
  let prismaService: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductionRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    repository = module.get<ProductionRepository>(ProductionRepository);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should create new production', async () => {
    const team = mockedTeam;
    const task = mockedTask;
    const tower = mockedTower;
    const production = mockedProductions[0];

    // @ts-ignore
    prismaService.team.findUnique.mockResolvedValue(team);

    // @ts-ignore
    prismaService.task.findUnique.mockResolvedValue(task);

    // @ts-ignore
    prismaService.listConstruction.findUnique.mockResolvedValue(tower);

    // @ts-ignore
    prismaService.production.create.mockResolvedValue(production);

    const createProduction = () => {
      return repository.create(production);
    };

    await expect(createProduction()).resolves.toBe(production);
  });

  it('should find all productions', async () => {
    const params = {
      page: 1,
      totalPerPage: 15,
    };
    const productions = mockedProductions;

    // @ts-ignore
    prismaService.production.findMany.mockResolvedValue(productions);

    const findAllProductions = () => {
      return repository.findAll(params);
    };

    await expect(findAllProductions()).resolves.toBe(productions);
    await expect(findAllProductions()).resolves.toHaveLength(2);
  });

  it('should find one production', async () => {
    const production = mockedProductions[0];

    prismaService.production.findUnique.mockResolvedValue(production);

    const findOneProduction = () => {
      return repository.findOne(production.id);
    };

    await expect(findOneProduction()).resolves.toBe(production);
  });

  it('should update production', async () => {
    const team = mockedTeam;
    const task = mockedTask;
    const tower = mockedTower;
    const production = mockedProductions[0];

    // @ts-ignore
    prismaService.team.findUnique.mockResolvedValue(team);

    // @ts-ignore
    prismaService.task.findUnique.mockResolvedValue(task);

    // @ts-ignore
    prismaService.listConstruction.findUnique.mockResolvedValue(tower);

    prismaService.production.update.mockResolvedValue(production);

    const updateProduction = () => {
      return repository.update(1, production);
    };

    await expect(updateProduction()).resolves.toBe(production);
  });

  it('should delete one production', async () => {
    const production = mockedProductions[0];

    prismaService.production.delete.mockResolvedValue(production);

    const removeProduction = () => {
      return repository.remove(production.id);
    };

    await expect(removeProduction()).resolves.toBe(production);
  });
});
