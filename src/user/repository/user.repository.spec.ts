/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient, Role } from '@prisma/client';
import { UserRepository } from './user.repository';

describe('UserRepository', () => {
  let repository: UserRepository;
  let prismaService: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    repository = module.get<UserRepository>(UserRepository);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should create new user', async () => {
    const mockedUser = {
      id: 1,
      name: 'some name',
      email: 'some email',
      password: 'some password',
      role: Role.ADMIN,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // @ts-ignore
    prismaService.user.create.mockResolvedValue(mockedUser);

    const createUser = () => {
      return repository.create(mockedUser);
    };

    await expect(createUser()).resolves.toBe(mockedUser);
  });
});
