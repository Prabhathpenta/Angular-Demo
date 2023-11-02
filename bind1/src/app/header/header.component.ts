import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  username:string="Naresh";
  path : string ="https://www.Nareshit.com";
  link : string = "https://www.youtube.com";
  isdisabled : boolean = (this.username === "Naresh")?false:true;
  newClass:string = this.username === 'Naresh' ? 'light' : 'dark';
  dt = new Date();
  greet() 
  {
   console.log(`my name is ${this.username}`)
  }

}
