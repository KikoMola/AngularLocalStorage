import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../servicios/task-service.service';
import { Task } from '../../modelos/task';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css'],
})
export class TaskListComponentComponent implements OnInit {

  tasks: Task[] = [];

  constructor(public taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
}
