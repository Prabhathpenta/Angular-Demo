import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { loginform } from './models/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive';
  constructor(private fb : FormBuilder) {
  }

  myForm = this.fb.group({
    uname: new FormControl("",[Validators.required,Validators.email]),
    pswd: new FormControl("",[Validators.minLength(8)])

  // myForm = new FormGroup({
  //   uname: new FormControl("",[Validators.required,Validators.email]),
  //   pswd: new FormControl("",[Validators.minLength(8)])
  })
  show() {
    
    console.log(this.myForm)
  }

  submit() {

  }
}
