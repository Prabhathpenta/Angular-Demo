import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @Input() msg='';
  // @Input() msg2='';
  // @Input() msg3='';
  // @Input() names='';
   

  // (@output)
  // message ="Hello parent!"
  // @Output() eve = new EventEmitter();

  // callParent() {
  //   this.eve.emit(this.message)
  // }

  
  //template -ref-variables
  message1="template-ref-variable"

  greet() {
    alert("Hello Moto")
  }
}
