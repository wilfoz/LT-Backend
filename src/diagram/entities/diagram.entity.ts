import { Diagram } from '@prisma/client';

export class DiagramEntity implements Diagram {
  id: number;
  listId: number;

  status_topography: string;

  status_vegetal_supression: string;

  type_of_foundation_A: string;
  type_of_foundation_B: string;
  type_of_foundation_C: string;
  type_of_foundation_D: string;
  type_of_foundation_MC: string;

  status_foundation_A: string;
  status_foundation_B: string;
  status_foundation_C: string;
  status_foundation_D: string;
  status_foundation_MC: string;

  status_tower_assembly: string;
  status_cable_laying: string;
}
