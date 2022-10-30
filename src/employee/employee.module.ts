import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { EmployeeRepository } from './repository/employee.repository';

@Module({
  imports: [PrismaModule],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository],
})
export class EmployeeModule {}
