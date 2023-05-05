import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Task, filteredTasks, productionMapped } from '../utils/helpers';

@Injectable()
export class DiagramRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(): Promise<any[]> {
    const listConstruction = await this.prisma.listConstruction.findMany({
      select: {
        id: true,
        tower: true,
        type: true,
        type_of_foundation_A: true,
        type_of_foundation_B: true,
        type_of_foundation_C: true,
        type_of_foundation_D: true,
        type_of_foundation_MC: true,
        embargo: true,
      },
    });

    const tasks = await this.prisma.production.findMany({
      where: {
        status: 'EXECUTADO',
        task: {
          is_mapped: false,
        },
      },
      include: {
        task: {
          select: {
            code: true,
            name: true,
            group: true,
            stage: true,
          },
        },
      },
    });

    const listOfDiagram = listConstruction.map((list) => {
      const filtered = filteredTasks(list, tasks);
      const mappedTasks = productionMapped(filtered).reduce((acc, curr) => {
        return {
          ...acc,
          ...curr,
        };
      }, {} as Task);

      return {
        ...list,
        comments: mappedTasks.comments || '',
        status_topography: mappedTasks.status_topography || '',
        status_vegetal_supression: mappedTasks.status_vegetal_supression || '',
        status_foundation_A: mappedTasks.status_foundation_A || '',
        status_foundation_B: mappedTasks.status_foundation_B || '',
        status_foundation_C: mappedTasks.status_foundation_C || '',
        status_foundation_D: mappedTasks.status_foundation_D || '',
        status_foundation_MC: mappedTasks.status_foundation_MC || '',
        status_tower_assembly: mappedTasks.status_tower_assembly || '',
        status_cable_laying: mappedTasks.status_cable_laying || '',
      };
    });

    return listOfDiagram;
  }
}
