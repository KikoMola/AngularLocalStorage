import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../modelos/task';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../servicios/task-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {

  @Input() task!: Task;

  faTrashAlt = faTrashAlt;

  constructor(public taskService: TaskService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
    this.toastr.success('Task deleted successfully.', 'Success!');
  }

}
