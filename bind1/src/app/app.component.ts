import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bind1';
  isenabled:boolean=false;
  cname:string=this.isenabled? 'light': 'dark';
  c:string = 'violet';
  val:string = '20px';
  myRule() {
    alert("404 Error");
  }
}
