import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formDemo';

  display(f:any,a:any, b:any, c:any) {
    console.log(f,a,b,c);
    console.log(c.value);

    f.setValue ({
      username:"prabha",
      pswrd:123456,
      email:"prty23@sdf.com"
    })
}
  submit() {

  }

}
