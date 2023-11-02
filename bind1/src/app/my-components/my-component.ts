import { Component } from "@angular/core";
@Component({
    selector : 'app-my',
    template :'<p>Its working! {{name}}  </p>',
    styles :['p{text-align : center;}']
})

export class MyComponent {
    name : string='raj';

}