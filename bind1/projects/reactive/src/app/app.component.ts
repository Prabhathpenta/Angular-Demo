import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder , ValidatorFn} from '@angular/forms';
import { loginform } from './models/login.model';
import { FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive';
  data$:any;
  constructor(private fb : FormBuilder, private hc : HttpClient) {
  }

  //myForm = this.fb.group({
    //uname: new FormControl("",[Validators.required,Validators.email]),
    //pswd: new FormControl("",[Validators.minLength(8)])

  // myForm = new FormGroup({
  //   uname: new FormControl("",[Validators.required,Validators.email]),
  //   pswd: new FormControl("",[Validators.minLength(8)])
 // })

 ngOnInit() {
  this.getData();
 }

 getData() {
 this.data$ = this.hc.get(`https://jsonplaceholder.typicode.com/todos`);
 console.log(this.data$)
 }

 myForm = this.fb.group({
  uname:[null,[Validators.required, this.checkUpperCase], this.asyncValidateTest],
  password:[],
  names:this.fb.array(      //form arrays
  [this.fb.control('')]         //OR WE TAKE [new FormControl()]
  )
 })

 checkUpperCase(control:FormControl)  {
  const pattern=/[A-Z]/
  console.log(control.value)
 if(!(pattern.test(control.value)))  {
    return {upperCaseError:true};        
 }
  return null;
 }

 asyncValidateTest(control: FormControl) {
  const response = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve({key:true})

    },3000)
    return null;
  })
  return response; 
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
    this.fb.array 
    console.log(this.myForm,this.myForm.get('uname'));
  }


  submit() {

  }
}
