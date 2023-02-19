import { Injectable } from '@nestjs/common';
import { CreateProductionDto } from './dto/create-production.dto';
import { UpdateProductionDto } from './dto/update-production.dto';
import { ProductionRepository } from './repository/production.repository';

@Injectable()
export class ProductionService {
  constructor(private repository: ProductionRepository) {}
  create(createProductionDto: CreateProductionDto) {
    return this.repository.create(createProductionDto);
  }

  findAll(pagination: { page: number; totalPerPage: number }) {
    return this.repository.findAll(pagination);
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateProductionDto: UpdateProductionDto) {
    return this.repository.update(id, updateProductionDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
