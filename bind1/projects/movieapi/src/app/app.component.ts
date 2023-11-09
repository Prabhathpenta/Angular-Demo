import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movieapi';
  val:string='';
  url:string="https://omdbapi.com/?s=%22baahubali%22&apikey=2210adfb"
  movies = [];

  async getMovieData(value:string) {
    const movieResponse = await fetch(this.url)
    const data =await movieResponse.json();
    console.log(data);
    this.movies=data.Search;
    console.log(this.movies);

  }
  clickSearch() {
    this.getMovieData(this.val);
  }
}
