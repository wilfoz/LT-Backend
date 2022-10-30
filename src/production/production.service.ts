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

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} production`;
  }

  update(id: number, updateProductionDto: UpdateProductionDto) {
    return `This action updates a #${id} production`;
  }

  remove(id: number) {
    return `This action removes a #${id} production`;
  }
}
