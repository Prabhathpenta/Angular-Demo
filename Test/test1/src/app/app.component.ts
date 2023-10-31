import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

msg:String = 'string interpolation';
name:String = 'prabha';
greet() {
  return this.msg;
}

  title = 'test1';
}
