import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {
  title = 'Movieapi';
  searchQuery : string='';
  movies: any[] = [];
  
   
  //url:string=`https://www.omdbapi.com/?s=${this.searchQuery}&apikey=${this.apikey}`;
 
  //val:string='';
  
 
  
 
  
 
  async fetchMovies() {

    try {

      const apikey = '1870b88e'; 
      const response = await fetch(`https://www.omdbapi.com/?s=${this.searchQuery}&apikey=${apikey}`);
      if (response.ok) {
        const data = await response.json();
        this.movies=data.Search;
      
    } else {
      console.error('Error fetching data');
    }
  } catch (error) {
    console.error(error);
  } 
}

 

  ngOnInit() {
    this.fetchMovies();
  }
  
  onSearchInput() {
    this.fetchMovies();
  }
}


