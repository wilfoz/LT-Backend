import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { EquipmentRepository } from './repository/equipment.repository';

@Injectable()
export class EquipmentService {
  constructor(private repository: EquipmentRepository) {}
  create(createEquipmentDto: CreateEquipmentDto) {
    return this.repository.create(createEquipmentDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateEquipmentDto: UpdateEquipmentDto) {
    return this.repository.update(id, updateEquipmentDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
