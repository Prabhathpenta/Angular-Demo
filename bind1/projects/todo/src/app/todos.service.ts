import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private task1:string[]=[];

  addTodo(todo:string):void {
    this.task1.push(todo)
  }

  getTodoArray() {
    return this.task1;
  }

  removeTodo(id:number) {
    this.task1.splice(id,1);
  }

  constructor() { }
}
