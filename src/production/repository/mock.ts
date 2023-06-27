import {
  EMBARGOES,
  STAGE,
  STATUS_PRODUCTION,
  UNITY,
  WEATHER,
} from '@prisma/client';

export const mockedTeam = {
  id: 1,
  name: 'Team',
  tooling_cost: 100,
};

export const mockedTask = {
  id: 1,
  name: 'test',
  code: 1,
  group: 'test',
  unity: UNITY.TORRE,
  total: 1,
  stage: STAGE.CIVIL,
  is_mapped: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const mockedTower = {
  id: 1,
  code: 1,
  tower: '12/2',
  type: 'some type',
  locality: 'test',
  coordinates: 'test',
  forward: 1212,
  height: 1212,
  weight: 1212,
  excavation_volume: 1212,
  concrete_volume: 1212,
  backfill_volume: 1212,
  steel_volume: 1212,
  type_of_foundation_A: 'A',
  type_of_foundation_B: 'B',
  type_of_foundation_C: 'C',
  type_of_foundation_D: 'D',
  type_of_foundation_MC: 'MC',
  embargo: EMBARGOES.FUNDIARIO,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const mockedProductions = [
  {
    id: 1,
    comments: '',
    status: STATUS_PRODUCTION.EXECUTADO,
    weather: WEATHER.BOM,
    taskId: 1,
    listId: 1,
    teamId: 1,
    productionDate: new Date(),
    startTimeOfDay: '07:00',
    endTimeOfDay: '18:00',
    task: 'Locação',
    tower: '12/1',
    team: 'Topografia',
  },
  {
    id: 2,
    comments: 'test2',
    status: STATUS_PRODUCTION.EXECUTADO,
    weather: WEATHER.BOM,
    taskId: 2,
    listId: 2,
    teamId: 2,
    productionDate: new Date(),
    startTimeOfDay: '07:00',
    endTimeOfDay: '18:00',
    task: 'Escavação',
    tower: '12/1',
    team: 'Escavação 1',
  },
];
