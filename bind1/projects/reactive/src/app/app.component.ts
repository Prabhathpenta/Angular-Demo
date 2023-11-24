import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { loginform } from './models/login.model';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive';
  constructor(private fb : FormBuilder) {
  }

  //myForm = this.fb.group({
    //uname: new FormControl("",[Validators.required,Validators.email]),
    //pswd: new FormControl("",[Validators.minLength(8)])

  // myForm = new FormGroup({
  //   uname: new FormControl("",[Validators.required,Validators.email]),
  //   pswd: new FormControl("",[Validators.minLength(8)])
 // })

 myForm = this.fb.group({
  uname:[null,[Validators.required, this.checkUpper()]],
  password:[],
          //form Arrays
    
  names:this.fb.array(
   // [new FormControl()] or
    [this.fb.control("")]
  )
 })

 checkUpper():any {
  const pattern=/[A-Z]/
 console.log(this.myForm);

 }

 get names () {
  return this.myForm.controls.names as FormArray
 }
 
  add() {
    console.log(this.myForm.controls.names);
    this.myForm.controls.names.push(this.fb.control(null))
  }
delete(i:any) {
this.myForm.controls.names.controls.splice(i,1)
} 
  
  show() {
    
    console.log(this.myForm)
  }


  submit() {

  }
}
