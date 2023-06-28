import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

describe('TeamController', () => {
  let controller: TeamController;
  let service: DeepMockProxy<TeamService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamController],
      providers: [TeamService],
    })
      .overrideProvider(TeamService)
      .useValue(mockDeep<TeamService>())
      .compile();

    controller = module.get<TeamController>(TeamController);
    service = module.get(TeamService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling create method', () => {
    const dto = new CreateTeamDto();
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
    const dto = new UpdateTeamDto();
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
