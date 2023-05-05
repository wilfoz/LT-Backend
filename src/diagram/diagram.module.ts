import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { DiagramController } from './diagram.controller';
import { DiagramService } from './diagram.service';
import { DiagramRepository } from './repository/diagram.repository';

@Module({
  imports: [PrismaModule],
  controllers: [DiagramController],
  providers: [DiagramService, DiagramRepository],
})
export class DiagramModule {}
