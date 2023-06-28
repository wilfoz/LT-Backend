import { Injectable } from '@nestjs/common';
import { TowerRepository } from './repository/tower.repository';
import { CreateTowerDto } from './dto/create-tower.dto';
import { TowerEntity } from './entities/tower.entity';
import { UpdateTowerDto } from './dto/update-tower.dto';

@Injectable()
export class TowerService {
  constructor(private readonly repository: TowerRepository) {}
  create(createTowerDto: CreateTowerDto): Promise<TowerEntity> {
    return this.repository.create(createTowerDto);
  }

  findAll(pagination: {
    page: number;
    totalPerPage: number;
  }): Promise<TowerEntity[]> {
    return this.repository.findAll(pagination);
  }

  async findOne(id: number): Promise<TowerEntity> {
    const user = await this.repository.findOne(id);
    if (!user) {
      console.log('error');
    }
    return user;
  }

  update(id: number, updateTowerDto: UpdateTowerDto): Promise<TowerEntity> {
    return this.repository.update(id, updateTowerDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
