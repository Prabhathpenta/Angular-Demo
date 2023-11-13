import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataArrayService {

  movies = ["Avatar","Baahubali","Titanic"];
  cartoon = ["Ben 10","Kid vs cat","phineas & Ferb"];

  sayHello () {
    alert("Please give Contact details");
  }

  
  constructor() {}
}

