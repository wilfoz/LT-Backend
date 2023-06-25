/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { EquipmentRepository } from './equipment.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient, STATUS_EQUIPMENT } from '@prisma/client';

describe('EquipmentRepository', () => {
  let repository: EquipmentRepository;
  let prismaService: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquipmentRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    repository = module.get<EquipmentRepository>(EquipmentRepository);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should not team', async () => {
    const mockedEquipment = {
      id: 1,
      model: 'fake model',
      manufacturer: 'fake manufacturer',
      license_plate: 'XXX',
      provider: 'test',
      cost: 1,
      status: STATUS_EQUIPMENT.ATIVO,
      team: 'fake team',
      teamId: 1,
    };

    // @ts-ignore
    prismaService.equipment.create.mockResolvedValue(mockedEquipment);

    const createEquipment = () => {
      return repository.create(mockedEquipment);
    };
    await expect(createEquipment()).rejects.toBeInstanceOf(Error);
  });

  it('should create new equipment', async () => {
    const mockedTeam = {
      id: 1,
      name: '',
      tooling_cost: 100,
    };

    const mockedEquipment = {
      id: 1,
      model: 'fake model',
      manufacturer: 'fake manufacturer',
      license_plate: 'XXX',
      provider: 'test',
      cost: 1,
      status: STATUS_EQUIPMENT.ATIVO,
      team: 'fake team',
      teamId: 1,
    };

    // @ts-ignore
    prismaService.team.findUnique.mockResolvedValue(mockedTeam);
    prismaService.equipment.create.mockResolvedValue(mockedEquipment);

    const createEquipment = () => {
      return repository.create(mockedEquipment);
    };

    await expect(createEquipment()).resolves.toBe(mockedEquipment);
  });

  it('should find all equipments', async () => {
    const params = {
      page: 1,
      totalPerPage: 15,
    };

    const mockedEquipments = [
      {
        id: 1,
        model: 'model1',
        manufacturer: 'manufacturer',
        license_plate: 'XXX',
        provider: 'test',
        cost: 1,
        status: STATUS_EQUIPMENT.ATIVO,
        team: 'team1',
        teamId: 1,
      },
      {
        id: 2,
        model: 'model2',
        manufacturer: 'manufacturer',
        license_plate: 'XXX',
        provider: 'test',
        cost: 1,
        status: STATUS_EQUIPMENT.MANUTENCAO,
        team: 'team2',
        teamId: 1,
      },
    ];

    // @ts-ignore
    prismaService.equipment.findMany.mockResolvedValue(mockedEquipments);

    const findAllEquipments = () => {
      return repository.findAll(params);
    };

    await expect(findAllEquipments()).resolves.toBe(mockedEquipments);
    await expect(findAllEquipments()).resolves.toHaveLength(2);
  });

  it('should find one equipment', async () => {
    const mockedEquipment = {
      id: 1,
      model: 'model1',
      manufacturer: 'manufacturer',
      license_plate: 'XXX',
      provider: 'test',
      cost: 1,
      status: STATUS_EQUIPMENT.ATIVO,
      team: 'team1',
      teamId: 1,
    };

    prismaService.equipment.findUnique.mockResolvedValue(mockedEquipment);

    const findOneEquipment = () => {
      return repository.findOne(mockedEquipment.id);
    };

    await expect(findOneEquipment()).resolves.toBe(mockedEquipment);
  });

  it('should update equipment', async () => {
    const mockedTeam = {
      id: 1,
      name: '',
      tooling_cost: 100,
    };

    const mockedEquipment = {
      id: 1,
      model: 'updated model',
      manufacturer: 'test',
      license_plate: 'XXX',
      provider: 'test',
      cost: 1,
      status: STATUS_EQUIPMENT.ATIVO,
      team: 'team1',
      teamId: 1,
    };

    prismaService.team.findUnique.mockResolvedValue(mockedTeam);
    prismaService.equipment.update.mockResolvedValue(mockedEquipment);

    const updateEquipment = () => {
      return repository.update(1, mockedEquipment);
    };

    await expect(updateEquipment()).resolves.toBe(mockedEquipment);
  });

  it('should delete one equipment', async () => {
    const mockedEquipment = {
      id: 1,
      model: 'model1',
      manufacturer: 'manufacturer',
      license_plate: 'XXX',
      provider: 'test',
      cost: 1,
      status: STATUS_EQUIPMENT.ATIVO,
      team: 'team1',
      teamId: 1,
    };

    prismaService.equipment.delete.mockResolvedValue(mockedEquipment);

    const removeEquipment = () => {
      return repository.remove(mockedEquipment.id);
    };

    await expect(removeEquipment()).resolves.toBe(mockedEquipment);
  });
});
