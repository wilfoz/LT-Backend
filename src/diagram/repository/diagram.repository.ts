import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Task, mapProduction } from '../utils/mappers';
import { DiagramEntity } from '../entities/diagram.entity';

@Injectable()
export class DiagramRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<DiagramEntity[]> {
    const listConstruction = await this.findAllTowers();
    const productions = await this.findAllProduction();
    const diagram = this.setListDiagram(listConstruction, productions).sort(
      (a, b) => a.code - b.code,
    );

    return diagram;
  }

  async findAllTowers() {
    const listConstruction = await this.prisma.tower.findMany({
      select: {
        id: true,
        code: true,
        tower: true,
        type: true,
        coordinates: true,
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

  async findAllProduction() {
    const prod = await this.prisma.production.findMany({
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
    return prod;
  }

  setListDiagram(listConstruction, productions: any[]): any[] {
    return listConstruction.map((list) => {
      const filtered = productions.find((prod) => prod.listId == list.id);
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
