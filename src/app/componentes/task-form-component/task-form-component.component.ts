import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../servicios/task-service.service';

@Component({
  selector: 'app-task-form-component',
  templateUrl: './task-form-component.component.html',
  styleUrls: ['./task-form-component.component.css'],
})
export class TaskFormComponentComponent implements OnInit {
  constructor(public taskService: TaskService) {}

  ngOnInit(): void {}

  addTask(newTitle: HTMLInputElement, newDescription: HTMLTextAreaElement) {
    this.taskService.addTask({
      title: newTitle.value,
      description: newDescription.value,
    });
    newTitle.value = '';
    newDescription.value = '';
    newTitle.focus();
    return false;
  }
}
