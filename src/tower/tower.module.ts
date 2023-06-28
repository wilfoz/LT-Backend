import { Module } from '@nestjs/common';
import { TowerController } from './tower.controller';
import { TowerService } from './tower.service';
import { TowerRepository } from './repository/tower.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TowerController],
  providers: [TowerService, TowerRepository],
})
export class TowerModule {}
