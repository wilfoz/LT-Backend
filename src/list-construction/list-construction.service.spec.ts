import { Test, TestingModule } from '@nestjs/testing';
import { ListConstructionService } from './list-construction.service';

describe('ListConstructionService', () => {
  let service: ListConstructionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListConstructionService],
    }).compile();

    service = module.get<ListConstructionService>(ListConstructionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
