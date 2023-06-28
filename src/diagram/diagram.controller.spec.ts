import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { DiagramController } from './diagram.controller';
import { DiagramService } from './diagram.service';

describe('DiagramController', () => {
  let controller: DiagramController;
  let service: DeepMockProxy<DiagramService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiagramController],
      providers: [DiagramService],
    })
      .overrideProvider(DiagramService)
      .useValue(mockDeep<DiagramService>())
      .compile();

    controller = module.get<DiagramController>(DiagramController);
    service = module.get(DiagramService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling findAll method', () => {
    expect(controller.findAll()).not.toEqual(null);
    expect(service.findAll).toHaveBeenCalled();
  });
});
