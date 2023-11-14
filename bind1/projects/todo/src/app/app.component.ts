import { Component } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  constructor(private t :TodosService) {}
  task:string='';
  task1:string[]=[];
  addTask() {
    this.t.addTodo(this.task)
  }



}
