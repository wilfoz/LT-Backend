import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { StatusEntity } from './entities/status.entity';
import { StatusRepository } from './repository/status.repository';

@Injectable()
export class StatusService {
  constructor(private repository: StatusRepository) {}
  create(createStatusDto: CreateStatusDto): Promise<StatusEntity> {
    return this.repository.create(createStatusDto);
  }

  findAll(): Promise<StatusEntity[]> {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} status`;
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    return `This action updates a #${id} status`;
  }

  remove(id: number) {
    return `This action removes a #${id} status`;
  }
}
