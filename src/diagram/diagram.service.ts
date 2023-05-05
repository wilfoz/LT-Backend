import { Injectable } from '@nestjs/common';
import { DiagramRepository } from './repository/diagram.repository';
import { DiagramEntity } from './entities/diagram.entity';

@Injectable()
export class DiagramService {
  constructor(private repository: DiagramRepository) {}

  findAll(): Promise<DiagramEntity[]> {
    return this.repository.findAll();
  }
}
