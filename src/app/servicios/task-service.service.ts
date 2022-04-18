import { Injectable } from '@angular/core';

import { Task } from '../modelos/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [];

  constructor() {
    
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  deleteTask(task: Task) {
    for(let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i] === task) {
        this.tasks.splice(i, 1);
      }
    }
  }
}
