import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Input() data:any;
  ngOnInit() {
    console.log("I am a ng on in it for header")
  }
  ngOnChanges() {
    console.log("ng onchanges called");
  }
    ngOnDestroy() {
      console.log("iam dead");
    }
}
