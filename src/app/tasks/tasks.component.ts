import { Component, OnInit } from '@angular/core';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(public apeksha: TasksService) { }
  public tasks: any;
  ngOnInit() {
    this.getalltasks();
  }

  getalltasks() {

    this.apeksha.getAllTasks().subscribe((result) => {
      if (result != null && result !== undefined) {
        this.tasks = result;
      }
      return false;
    }, (err) => {
      throw err;
    });
  }

}
