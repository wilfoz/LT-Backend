/* eslint-disable prettier/prettier */

export type Task = {
  comments: string;
  status_foundation_A: string;
  status_foundation_B: string;
  status_foundation_C: string;
  status_foundation_D: string;
  status_foundation_MC: string;
  status_topography: string;
  status_vegetal_supression: string;
  status_tower_assembly: string;
  status_cable_laying: string;
};

export const productionMapped = (prods: any[]) =>
  prods
    .sort((a, b) => a.task.code - b.task.code)
    .map((prod) => {
      const task = handleTask(prod.task);
      const { comments } = prod;
      return {
        comments,
        ...task,
      };
    });

function handleTask(task: any) {
  const taskCivil = handleTaskCivil(task);
  return {
    ...taskCivil,
    status_topography: task.stage === 'TOPOGRAFIA' ? task.name : '',
    status_vegetal_supression: task.stage === 'SUPRESSAO' ? task.name : '',
    status_tower_assembly: task.stage === 'MONTAGEM' ? task.name : '',
    status_cable_laying: task.stage === 'LANCAMENTO' ? task.name : '',
  };
}

function handleTaskCivil(task: any): {
  status_foundation_A: string;
  status_foundation_B: string;
  status_foundation_C: string;
  status_foundation_D: string;
  status_foundation_MC: string;
} {
  if (task.stage === 'CIVIL') {
    if (!task.name.includes('100%')) {
      return {
        status_foundation_A: task.name.includes('A') ? task.name : '',
        status_foundation_B: task.name.includes('B') ? task.name : '',
        status_foundation_C: task.name.includes('C') ? task.name : '',
        status_foundation_D: task.name.includes('D') ? task.name : '',
        status_foundation_MC: task.name.includes('MC') ? task.name : '',
      };
    } else {
      return {
        status_foundation_A: task.name,
        status_foundation_B: task.name,
        status_foundation_C: task.name,
        status_foundation_D: task.name,
        status_foundation_MC: task.name,
      };
    }
  }

  return {
    status_foundation_A: '',
    status_foundation_B: '',
    status_foundation_C: '',
    status_foundation_D: '',
    status_foundation_MC: '',
  };
}

export const filteredTasks = (list, tasks: any[]) =>
  tasks.filter((task) => task.listId === list.id);
