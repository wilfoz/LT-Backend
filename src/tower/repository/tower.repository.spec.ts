/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { TowerRepository } from './tower.repository';
import { TowerEntity } from '../entities/tower.entity';

describe('TowerRepository', () => {
  let repository: TowerRepository;
  let prismaService: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TowerRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    repository = module.get<TowerRepository>(TowerRepository);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should create new tower', async () => {
    const mockedTower = new TowerEntity();

    // @ts-ignore
    prismaService.tower.create.mockResolvedValue(mockedTower);

    const createTower = () => {
      return repository.create(mockedTower);
    };

    await expect(createTower()).resolves.toBe(mockedTower);
  });

  it('should find all towers', async () => {
    const params = {
      page: 1,
      totalPerPage: 15,
    };
    const tower1 = new TowerEntity();
    const tower2 = new TowerEntity();
    const mockedTowers = [tower1, tower2];

    // @ts-ignore
    prismaService.tower.findMany.mockResolvedValue(mockedTowers);

    const findAllTower = () => {
      return repository.findAll(params);
    };

    await expect(findAllTower()).resolves.toBe(mockedTowers);
    await expect(findAllTower()).resolves.toHaveLength(2);
  });

  it('should find one tower', async () => {
    const mockedTower = new TowerEntity();

    prismaService.tower.findUnique.mockResolvedValue(mockedTower);

    const findOneTower = () => {
      return repository.findOne(mockedTower.id);
    };

    await expect(findOneTower()).resolves.toBe(mockedTower);
  });

  it('should update tower', async () => {
    const mockedTower = new TowerEntity();

    prismaService.tower.update.mockResolvedValue(mockedTower);

    const updateTower = () => {
      return repository.update(1, mockedTower);
    };

    await expect(updateTower()).resolves.toBe(mockedTower);
  });

  it('should delete one tower', async () => {
    const mockedTower = new TowerEntity();

    prismaService.tower.delete.mockResolvedValue(mockedTower);

    const removeTower = () => {
      return repository.remove(mockedTower.id);
    };

    await expect(removeTower()).resolves.toBe(mockedTower);
  });
});
