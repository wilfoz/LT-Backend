import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { StatusModule } from './status/status.module';
import { TaskModule } from './task/task.module';
import { ProductionModule } from './production/production.module';
import { TeamModule } from './team/team.module';
import { EmployeeModule } from './employee/employee.module';
import { EquipmentModule } from './equipment/equipment.module';
import { ListConstructionModule } from './list-construction/list-construction.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ListConstructionModule,
    UserModule,
    PrismaModule,
    AuthModule,
    StatusModule,
    TaskModule,
    ProductionModule,
    TeamModule,
    EmployeeModule,
    EquipmentModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
