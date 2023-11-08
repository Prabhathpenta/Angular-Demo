import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'switchFor';
  value:number=0;

  incr() {
    this.value++;
  }

  data = ['mobiles','tables','laptops','tv'];
}
