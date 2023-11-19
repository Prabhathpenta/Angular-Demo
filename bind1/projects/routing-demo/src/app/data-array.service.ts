import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataArrayService {

  movies = ["Avatar","Baahubali","Titanic"];
  cartoon = ["Ben 10","Kid vs cat","phineas & Ferb"];

  sayHello () {
    alert("Please give Contact details");
  }

  value:any;
  constructor(private ht: HttpClient) {
    this.value=this.ht.get('https://jsonplaceholder.typicode.com/posts');
    console.log(this.value);
    this.value.subscribe((v:any)=>{
      console.log(v)
    }) 
  }
}

