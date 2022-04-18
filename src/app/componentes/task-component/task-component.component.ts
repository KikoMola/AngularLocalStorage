import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../modelos/task';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../servicios/task-service.service';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css'],
})
export class TaskComponentComponent implements OnInit {
  @Input() task!: Task;

  faTrashAlt = faTrashAlt;

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {}

  deleteTask(task: Task) {
    if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      this.taskService.deleteTask(task);
    }
  }
}
