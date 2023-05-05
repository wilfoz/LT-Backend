import { Test, TestingModule } from '@nestjs/testing';
import { ListConstructionController } from './list-construction.controller';
import { ListConstructionService } from './repository/list-construction.repository';

describe('ListConstructionController', () => {
  let controller: ListConstructionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListConstructionController],
      providers: [ListConstructionService],
    }).compile();

    controller = module.get<ListConstructionController>(
      ListConstructionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
