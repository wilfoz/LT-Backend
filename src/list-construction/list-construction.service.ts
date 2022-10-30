import { Injectable } from '@nestjs/common';
import { CreateListConstructionDto } from './dto/create-list-construction.dto';
import { UpdateListConstructionDto } from './dto/update-list-construction.dto';
import { ListConstructionEntity } from './entities/list-construction.entity';
import { ListConstructionRepository } from './repository/list-construction.repository';

@Injectable()
export class ListConstructionService {
  constructor(private readonly repository: ListConstructionRepository) {}
  create(
    createListConstructionDto: CreateListConstructionDto,
  ): Promise<ListConstructionEntity> {
    return this.repository.create(createListConstructionDto);
  }

  findAll(): Promise<ListConstructionEntity[]> {
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<ListConstructionEntity> {
    const user = await this.repository.findOne(id);
    if (!user) {
      console.log('error');
    }
    return user;
  }

  update(
    id: number,
    updateListConstructionDto: UpdateListConstructionDto,
  ): Promise<ListConstructionEntity> {
    return this.repository.update(id, updateListConstructionDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
