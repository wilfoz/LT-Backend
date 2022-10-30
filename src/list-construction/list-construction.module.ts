import { Module } from '@nestjs/common';
import { ListConstructionController } from './list-construction.controller';
import { ListConstructionService } from './list-construction.service';
import { ListConstructionRepository } from './repository/list-construction.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ListConstructionController],
  providers: [ListConstructionService, ListConstructionRepository],
})
export class ListConstructionModule {}
