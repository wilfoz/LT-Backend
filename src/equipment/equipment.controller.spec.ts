import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentController } from './equipment.controller';
import { EquipmentService } from './equipment.service';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';

describe('EquipmentController', () => {
  let controller: EquipmentController;
  let equipmentService: DeepMockProxy<EquipmentService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquipmentController],
      providers: [EquipmentService],
    })
      .overrideProvider(EquipmentService)
      .useValue(mockDeep<EquipmentService>())
      .compile();

    controller = module.get<EquipmentController>(EquipmentController);
    equipmentService = module.get(EquipmentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling create method', () => {
    const dto = new CreateEquipmentDto();
    expect(controller.create(dto)).not.toEqual(null);
    expect(equipmentService.create).toHaveBeenCalled();
  });

  it('calling findAll method', () => {
    const params = {
      page: 0,
      totalPerPage: 0,
    };

    expect(controller.findAll(params)).not.toEqual(null);
    expect(equipmentService.findAll).toHaveBeenCalledWith(params);
  });

  it('calling findOne method', () => {
    const id = '1';
    expect(controller.findOne(id)).not.toEqual(null);
    expect(equipmentService.findOne).toHaveBeenCalledWith(+id);
  });

  it('calling findOne update', () => {
    const dto = new UpdateEquipmentDto();
    const id = '1';
    expect(controller.update(id, dto)).not.toEqual(null);
    expect(equipmentService.update).toHaveBeenCalledWith(+id, dto);
  });

  it('calling findOne delete', () => {
    const id = '1';
    expect(controller.remove(id)).not.toEqual(null);
    expect(equipmentService.remove).toHaveBeenCalledWith(+id);
  });
});
