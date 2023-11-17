import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router,  } from '@angular/router';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private s:Router) {

  }
  title = 'routeParameter';
  users = [
    {name:'raj', age:20, id: 123},
    {name:'vjay', age:24, id: 456},
    {name:'sehwag', age:28, id: 789},
  ]
  call(id:number) {
    this.s.navigate(['users', id])
    
  }
}
