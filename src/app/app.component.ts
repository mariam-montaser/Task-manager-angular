import { Component } from '@angular/core';

import { Model, Task } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: Model = new Model();

  getName() {
    return this.model.user;
  }

  getTasks() {
    return this.model.tasks.filter(task => !task.done);
  }

  addTask(task: string) {
    if (task != null) {
      this.model.tasks.push(new Task(task, false));
    }
  }
}
