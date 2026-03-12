import { addTask, getAllTasks, completeTask } from './task.js';

addTask("reading", "medium", "26-02-26");
addTask("problem-solve", "l", "26-02-26");
addTask("eating", "high", "26-02-26");

getAllTasks();
completeTask(1);
getAllTasks();
