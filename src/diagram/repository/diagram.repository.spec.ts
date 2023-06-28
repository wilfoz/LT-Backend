/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { DiagramRepository } from './diagram.repository';
import { mockedDiagramList } from './mocks';

describe('DiagramRepository', () => {
  let repository: DiagramRepository;
  let prismaService: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiagramRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    repository = module.get<DiagramRepository>(DiagramRepository);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should find all diagram', async () => {
    const diagrams = mockedDiagramList;

    const findAllDiagram = () => {
      return repository.findAll();
    };

    await expect(findAllDiagram()).resolves.toBe(diagrams);
    await expect(findAllDiagram()).resolves.toHaveLength(2);
  });
});
