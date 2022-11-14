import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeEntity } from './entities/employee.entity';
import { EmployeeRepository } from './repository/employee.repository';

@Injectable()
export class EmployeeService {
  constructor(private repository: EmployeeRepository) {}
  create(createEmployeeDto: CreateEmployeeDto): Promise<EmployeeEntity> {
    return this.repository.create(createEmployeeDto);
  }

  findAll(pagination: {
    page: number;
    totalPerPage: number;
  }): Promise<EmployeeEntity[]> {
    return this.repository.findAll(pagination);
  }

  findOne(id: number): Promise<EmployeeEntity> {
    return this.repository.findOne(id);
  }

  update(
    id: number,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<EmployeeEntity> {
    return this.repository.update(id, updateEmployeeDto);
  }

  remove(id: number): Promise<EmployeeEntity> {
    return this.repository.remove(id);
  }
}
