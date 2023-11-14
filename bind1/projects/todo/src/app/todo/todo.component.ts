import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(private t :TodosService) {}
  task1:string[] =[]

  ngOnInit() {
    this.task1=this.t.getTodoArray()
  }
  delete(i:number) {
    this.t.removeTodo(i)
  }

}

//t is a dependency injection
