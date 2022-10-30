import { Module } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { EquipmentRepository } from './repository/equipment.repository';

@Module({
  imports: [PrismaModule],
  controllers: [EquipmentController],
  providers: [EquipmentService, EquipmentRepository],
})
export class EquipmentModule {}
