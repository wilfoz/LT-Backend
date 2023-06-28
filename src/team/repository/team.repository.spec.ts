/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { TeamRepository } from './team.repository';

describe('TeamRepository', () => {
  let repository: TeamRepository;
  let prismaService: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    repository = module.get<TeamRepository>(TeamRepository);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should create new team', async () => {
    const mockedTeam = {
      id: 1,
      name: 'Team',
      tooling_cost: 100,
      employee: [],
      equipment: [],
    };

    // @ts-ignore
    prismaService.team.create.mockResolvedValue(mockedTeam);

    const createTeam = () => {
      return repository.create(mockedTeam);
    };

    await expect(createTeam()).resolves.toBe(mockedTeam);
  });

  it('should find all teams', async () => {
    const params = {
      page: 1,
      totalPerPage: 15,
    };

    const mockedTeams = [
      {
        id: 1,
        name: 'Team1',
        tooling_cost: 100,
        employee: [],
        equipment: [],
      },
      {
        id: 2,
        name: 'Team2',
        tooling_cost: 200,
        employee: [],
        equipment: [],
      },
    ];

    // @ts-ignore
    prismaService.team.findMany.mockResolvedValue(mockedTeams);

    const findAllTeams = () => {
      return repository.findAll(params);
    };

    await expect(findAllTeams()).resolves.toBe(mockedTeams);
    await expect(findAllTeams()).resolves.toHaveLength(2);
  });

  it('should find one team', async () => {
    const mockedTeam = {
      id: 1,
      name: 'Team',
      tooling_cost: 100,
      employee: [],
      equipment: [],
    };

    // @ts-ignore
    prismaService.team.findUnique.mockResolvedValue(mockedTeam);

    const findOneTeam = () => {
      return repository.findOne(mockedTeam.id);
    };

    await expect(findOneTeam()).resolves.toBe(mockedTeam);
  });

  it('should update team', async () => {
    const mockedTeam = {
      id: 1,
      name: 'Team',
      tooling_cost: 100,
      employee: [],
      equipment: [],
    };

    // @ts-ignore
    prismaService.team.update.mockResolvedValue(mockedTeam);

    const updateTeam = () => {
      return repository.update(1, mockedTeam);
    };

    await expect(updateTeam()).resolves.toBe(mockedTeam);
  });

  it('should delete one team', async () => {
    const mockedTeam = {
      id: 1,
      name: 'Team',
      tooling_cost: 100,
      employee: [],
      equipment: [],
    };

    // @ts-ignore
    prismaService.team.delete.mockResolvedValue(mockedTeam);

    const removeTeam = () => {
      return repository.remove(mockedTeam.id);
    };

    await expect(removeTeam()).resolves.toBe(mockedTeam);
  });
});
