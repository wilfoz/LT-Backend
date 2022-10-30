import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { NotFoundError } from 'src/shared/errors/types/NotFoundError';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';
import { EmployeeEntity } from '../entities/employee.entity';

@Injectable()
export class EmployeeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<EmployeeEntity> {
    const team = await this.prisma.team.findUnique({
      where: {
        name: createEmployeeDto.team,
      },
    });

    if (!team) {
      throw new NotFoundError('Team not found.');
    }

    const data: Prisma.EmployeeCreateInput = {
      ...createEmployeeDto,
      team: {
        connect: {
          name: team.name,
        },
      },
    };
    return this.prisma.employee.create({
      data,
    });
  }

  findAll(): Promise<EmployeeEntity[]> {
    return this.prisma.employee.findMany({
      include: {
        team: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  findOne(id: number): Promise<EmployeeEntity> {
    return this.prisma.employee.findUnique({
      where: {
        id,
      },
      include: {
        team: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async update(
    id: number,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<EmployeeEntity> {
    const team = await this.prisma.team.findUnique({
      where: {
        name: updateEmployeeDto.team,
      },
    });

    if (!team) {
      throw new NotFoundError('Team not found.');
    }

    const data: Prisma.EmployeeUpdateInput = {
      ...updateEmployeeDto,
      team: {
        connect: {
          name: team.name,
        },
      },
    };

    return this.prisma.employee.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number): Promise<EmployeeEntity> {
    return this.prisma.employee.delete({
      where: {
        id,
      },
    });
  }
}
