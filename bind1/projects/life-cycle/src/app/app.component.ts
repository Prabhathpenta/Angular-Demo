import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeCycle';
  constructor () {
    console.log("iam a constructor")
  }
  data:any
  ngOnInit() {
    console.log("I am a ng on in it")
  }
}
