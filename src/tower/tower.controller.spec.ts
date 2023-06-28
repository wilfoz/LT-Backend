import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { TowerController } from './tower.controller';
import { TowerService } from './tower.service';
import { CreateTowerDto } from './dto/create-tower.dto';
import { UpdateTowerDto } from './dto/update-tower.dto';

describe('TowerController', () => {
  let controller: TowerController;
  let service: DeepMockProxy<TowerService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TowerController],
      providers: [TowerService],
    })
      .overrideProvider(TowerService)
      .useValue(mockDeep<TowerService>())
      .compile();

    controller = module.get<TowerController>(TowerController);
    service = module.get(TowerService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling create method', () => {
    const dto = new CreateTowerDto();
    expect(controller.create(dto)).not.toEqual(null);
    expect(service.create).toHaveBeenCalled();
  });

  it('calling findAll method', () => {
    const params = {
      page: 0,
      totalPerPage: 0,
    };

    expect(controller.findAll(params)).not.toEqual(null);
    expect(service.findAll).toHaveBeenCalledWith(params);
  });

  it('calling findOne method', () => {
    const id = '1';
    expect(controller.findOne(+id)).not.toEqual(null);
    expect(service.findOne).toHaveBeenCalledWith(+id);
  });

  it('calling findOne update', () => {
    const dto = new UpdateTowerDto();
    const id = '1';
    expect(controller.update(+id, dto)).not.toEqual(null);
    expect(service.update).toHaveBeenCalledWith(+id, dto);
  });

  it('calling findOne delete', () => {
    const id = '1';
    expect(controller.remove(+id)).not.toEqual(null);
    expect(service.remove).toHaveBeenCalledWith(+id);
  });
});
