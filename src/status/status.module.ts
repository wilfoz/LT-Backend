import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { StatusRepository } from './repository/status.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StatusController],
  providers: [StatusService, StatusRepository],
})
export class StatusModule {}
