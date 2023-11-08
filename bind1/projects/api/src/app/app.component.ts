import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API';
  constructor() {
    this.fetchData(this.url);
  }

  data:any

  // //fetch API
  url = 'https://fakestoreapi.com/products';

  // fetchData(url:string) {
  //   fetch(url)
  //     .then((response) => {
  //       console.log(response)
  //       return response.json()
  //     })
  //     .then((data) => {
  //       this.data= data;
  //     })
  //     .catch((err)=>alert(err))
      
  // }

  async fetchData(url:string) {
    try {
      const response = await fetch(url)
    console.log(response)
    if (response.ok) 
    {
      const data = await response.json();
      this.data = data;
    }

    else
    {
      console.log("error");
    }
    
  }
  catch(err)
  {
    console.log(err)
  }

  }

  //pipes
  title1="abcdefAAAA"
price:number =100;

about={
  class: 'angularJs',
  topic: 'pipes' 
}
d=new Date
}

