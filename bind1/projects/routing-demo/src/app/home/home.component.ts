import { Component } from '@angular/core';
import { DataArrayService } from '../data-array.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //for use public-service 
  //constructor(public d : DataArrayService) {
    
  // }

  movies : string[]
  constructor(private d : DataArrayService) {
    this.movies = d.movies;

  }

}
