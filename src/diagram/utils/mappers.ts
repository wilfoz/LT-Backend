/* eslint-disable prettier/prettier */

export interface Task {
  comments: string;
  status: {
    foundation_A: string;
    foundation_B: string;
    foundation_C: string;
    foundation_D: string;
    foundation_MC: string;
    topography: string;
    vegetal_suppression: string;
    tower_assembly: string;
    cable_laying: string;
  };
}

export function mapProduction(prods: any[]): Task[] {
  return prods
    .sort((a, b) => a.task.code - b.task.code)
    .map((prod) => {
      const task = handleTask(prod.task);
      const comments = String(prod['comments']);
      const status = {
        ...task,
      };
      return {
        comments,
        status,
      };
    });
}

function handleTask(task: any) {
  const taskCivil = handleTaskCivil(task);
  return {
    ...taskCivil,
    topography: task.stage === 'TOPOGRAFIA' ? task.name : '',
    vegetal_suppression: task.stage === 'SUPRESSAO' ? task.name : '',
    tower_assembly: task.stage === 'MONTAGEM' ? task.name : '',
    cable_laying: task.stage === 'LANCAMENTO' ? task.name : '',
  };
}

function handleTaskCivil(task: any) {
  if (task.stage === 'CIVIL') {
    const isCompleted = task.name.includes('100%');
    const foundation_A = task.name.includes('A') ? task.name : '';
    const foundation_B = task.name.includes('B') ? task.name : '';
    const foundation_C = task.name.includes('C') ? task.name : '';
    const foundation_D = task.name.includes('D') ? task.name : '';
    const foundation_MC = task.name.includes('MC') ? task.name : '';

    return {
      foundation_A: isCompleted ? task.name : foundation_A,
      foundation_B: isCompleted ? task.name : foundation_B,
      foundation_C: isCompleted ? task.name : foundation_C,
      foundation_D: isCompleted ? task.name : foundation_D,
      foundation_MC: isCompleted ? task.name : foundation_MC,
    };
  }

  return {
    foundation_A: '',
    foundation_B: '',
    foundation_C: '',
    foundation_D: '',
    foundation_MC: '',
  };
}

export const filteredTasks = (list, tasks: any[]) =>
  tasks.filter((task) => task.listId === list.id);
