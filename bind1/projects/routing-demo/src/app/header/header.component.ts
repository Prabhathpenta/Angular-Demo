import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name = '';

  simpleObservable = new Observable((observer) => {
    observer.next("hello");
    observer.next("world");
    observer.complete();
      

  })


  constructor(private pr : ActivatedRoute) {
    // this.pr.queryParams.subscribe((p)=>console.log(p))
    this.pr.queryParams.subscribe((p)=> {
    this.name=p['name'];

    this.simpleObservable.subscribe((s=>console.log(s)))
  })
}
}

