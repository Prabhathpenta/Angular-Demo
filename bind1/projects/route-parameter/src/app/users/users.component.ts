import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userId:number=0
  constructor (private r: ActivatedRoute){
    this.r.params.subscribe((para) => {
      //console.log(para['id'])  
      this.userId = +para['id'];
    })
  }
  

}
