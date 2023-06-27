import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { ListConstructionService } from './list-construction.service';
import { CreateListConstructionDto } from './dto/create-list-construction.dto';
import { UpdateListConstructionDto } from './dto/update-list-construction.dto';
import { ListConstructionController } from './list-construction.controller';

describe('ListConstructionRepository', () => {
  let controller: ListConstructionController;
  let service: DeepMockProxy<ListConstructionService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListConstructionController],
      providers: [ListConstructionService],
    })
      .overrideProvider(ListConstructionService)
      .useValue(mockDeep<ListConstructionService>())
      .compile();

    controller = module.get<ListConstructionController>(
      ListConstructionController,
    );
    service = module.get(ListConstructionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling create method', () => {
    const dto = new CreateListConstructionDto();
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
    const dto = new UpdateListConstructionDto();
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
