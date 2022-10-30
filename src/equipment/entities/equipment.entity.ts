import { Equipment, STATUS_EQUIPMENT } from '@prisma/client';
export class EquipmentEntity implements Equipment {
  id: number;
  model: string;
  manufacturer: string;
  license_plate: string;
  provider: string;
  cost: number;
  status: STATUS_EQUIPMENT;
  teamId: number;
}
