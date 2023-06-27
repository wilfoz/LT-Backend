/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaService } from 'src/prisma/prisma.service';
import { LEADERS, PrismaClient, STATUS_EMPLOYEE } from '@prisma/client';
import { EmployeeRepository } from './employee.repository';

describe('EmployeeRepository', () => {
  let repository: EmployeeRepository;
  let prismaService: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    repository = module.get<EmployeeRepository>(EmployeeRepository);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should not team', async () => {
    const mockedEmployee = {
      id: 1,
      registration: '111',
      name: 'Test Name',
      occupation: 'Test',
      base_salary: 1,
      leadership: LEADERS.SIM,
      status: STATUS_EMPLOYEE.ATIVO,
      team: 'team',
      teamId: 1,
    };

    // @ts-ignore
    prismaService.employee.create.mockResolvedValue(mockedEmployee);

    const createEmployee = () => {
      return repository.create(mockedEmployee);
    };
    await expect(createEmployee()).rejects.toBeInstanceOf(Error);
  });

  it('should create new employee', async () => {
    const mockedTeam = {
      id: 1,
      name: '',
      tooling_cost: 100,
    };

    const mockedEmployee = {
      id: 1,
      registration: '111',
      name: 'Test Name',
      occupation: 'Test',
      base_salary: 1,
      leadership: LEADERS.SIM,
      status: STATUS_EMPLOYEE.ATIVO,
      team: 'team',
      teamId: 1,
    };

    // @ts-ignore
    prismaService.team.findUnique.mockResolvedValue(mockedTeam);
    prismaService.employee.create.mockResolvedValue(mockedEmployee);

    const createEmployee = () => {
      return repository.create(mockedEmployee);
    };

    await expect(createEmployee()).resolves.toBe(mockedEmployee);
  });

  it('should find all employee', async () => {
    const params = {
      page: 1,
      totalPerPage: 15,
    };

    const mockedEmployees = [
      {
        id: 1,
        registration: '222',
        name: 'Test Name1',
        occupation: 'Test1',
        base_salary: 100,
        leadership: LEADERS.SIM,
        status: STATUS_EMPLOYEE.ATIVO,
        team: 'team1',
        teamId: 1,
      },
      {
        id: 2,
        registration: '223',
        name: 'Test Name2',
        occupation: 'Test2',
        base_salary: 100,
        leadership: LEADERS.SIM,
        status: STATUS_EMPLOYEE.ATIVO,
        team: 'team2',
        teamId: 1,
      },
    ];

    // @ts-ignore
    prismaService.employee.findMany.mockResolvedValue(mockedEmployees);

    const findAllEmployees = () => {
      return repository.findAll(params);
    };

    await expect(findAllEmployees()).resolves.toBe(mockedEmployees);
    await expect(findAllEmployees()).resolves.toHaveLength(2);
  });

  it('should find one employee', async () => {
    const mockedEmployee = {
      id: 1,
      registration: '223',
      name: 'Test Name2',
      occupation: 'Test2',
      base_salary: 100,
      leadership: LEADERS.SIM,
      status: STATUS_EMPLOYEE.ATIVO,
      team: 'team1',
      teamId: 1,
    };

    // @ts-ignore
    prismaService.employee.findUnique.mockResolvedValue(mockedEmployee);

    const findOneEmployee = () => {
      return repository.findOne(mockedEmployee.id);
    };

    await expect(findOneEmployee()).resolves.toBe(mockedEmployee);
  });

  it('should update employee', async () => {
    const mockedTeam = {
      id: 1,
      name: '',
      tooling_cost: 100,
    };

    const mockedEmployee = {
      id: 1,
      registration: '223',
      name: 'Test Name2',
      occupation: 'Test2',
      base_salary: 100,
      leadership: LEADERS.SIM,
      status: STATUS_EMPLOYEE.ATIVO,
      team: 'team1',
      teamId: 1,
    };

    prismaService.team.findUnique.mockResolvedValue(mockedTeam);
    prismaService.employee.update.mockResolvedValue(mockedEmployee);

    const updateEmployee = () => {
      return repository.update(1, mockedEmployee);
    };

    await expect(updateEmployee()).resolves.toBe(mockedEmployee);
  });

  it('should delete one employee', async () => {
    const mockedEmployee = {
      id: 1,
      registration: '223',
      name: 'Test Name2',
      occupation: 'Test2',
      base_salary: 100,
      leadership: LEADERS.SIM,
      status: STATUS_EMPLOYEE.ATIVO,
      team: 'team1',
      teamId: 1,
    };

    // @ts-ignore
    prismaService.employee.delete.mockResolvedValue(mockedEmployee);

    const removeEmployee = () => {
      return repository.remove(mockedEmployee.id);
    };

    await expect(removeEmployee()).resolves.toBe(mockedEmployee);
  });
});
