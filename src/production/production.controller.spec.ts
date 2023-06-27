import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { ProductionController } from './production.controller';
import { ProductionService } from './production.service';
import { CreateProductionDto } from './dto/create-production.dto';
import { UpdateProductionDto } from './dto/update-production.dto';

describe('ProductionRepository', () => {
  let controller: ProductionController;
  let service: DeepMockProxy<ProductionService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductionController],
      providers: [ProductionService],
    })
      .overrideProvider(ProductionService)
      .useValue(mockDeep<ProductionService>())
      .compile();

    controller = module.get<ProductionController>(ProductionController);
    service = module.get(ProductionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling create method', () => {
    const dto = new CreateProductionDto();
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
    expect(controller.findOne(id)).not.toEqual(null);
    expect(service.findOne).toHaveBeenCalledWith(+id);
  });

  it('calling findOne update', () => {
    const dto = new UpdateProductionDto();
    const id = '1';
    expect(controller.update(id, dto)).not.toEqual(null);
    expect(service.update).toHaveBeenCalledWith(+id, dto);
  });

  it('calling findOne delete', () => {
    const id = '1';
    expect(controller.remove(id)).not.toEqual(null);
    expect(service.remove).toHaveBeenCalledWith(+id);
  });
});
