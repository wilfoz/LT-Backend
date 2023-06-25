import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Task, filteredTasks, mapProduction } from '../utils/mappers';

@Injectable()
export class DiagramRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(): Promise<any[]> {
    const listConstruction = await this.findAllListConstruction();
    const tasks = await this.findAllTask();
    const diagram = this.setListDiagram(listConstruction, tasks).sort(
      (a, b) => a.code - b.code,
    );

    return diagram;
  }

  async findAllListConstruction() {
    const listConstruction = await this.prisma.listConstruction.findMany({
      select: {
        id: true,
        code: true,
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

    return listConstruction;
  }

  async findAllTask() {
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
    return tasks;
  }

  setListDiagram(listConstruction, tasks): any[] {
    return listConstruction.map((list) => {
      const filtered = filteredTasks(list, tasks);
      const mapped = this.mapFilteredProduction(filtered);

      return {
        ...list,
        comments: mapped.comments || '',
        status_topography: mapped.status?.topography || '',
        status_vegetal_suppression: mapped.status?.vegetal_suppression || '',
        status_foundation_A: mapped.status?.foundation_A || '',
        status_foundation_B: mapped.status?.foundation_B || '',
        status_foundation_C: mapped.status?.foundation_C || '',
        status_foundation_D: mapped.status?.foundation_D || '',
        status_foundation_MC: mapped.status?.foundation_MC || '',
        status_tower_assembly: mapped.status?.tower_assembly || '',
        status_cable_laying: mapped.status?.cable_laying || '',
      };
    });
  }

  mapFilteredProduction(data) {
    return mapProduction(data).reduce((acc, curr) => {
      return {
        ...acc,
        ...curr,
      };
    }, {} as Task);
  }
}
