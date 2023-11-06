import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  name:string="String interploation";

  name1:string="property-Binding"
  isdisabled:boolean=(this.name1==='property-Bindin')?true:false;
  val:string="Its also Propert-Bind Type";

  isdanger:boolean=true;
  isNotdanger: boolean=true;
  iscenter:boolean=true;

  fun() {
    let obj={'center':this.iscenter, 'NotDanger':this.isNotdanger};
    return obj;
  }

  color:string="yellow";
  bgclr:string="violet";

  result(e:Event) {
    const ele=e.target as HTMLButtonElement;
    alert("came from template and it is a " +ele.textContent);
    alert("came from template and it is a " +e.target);

  }
  value1:string="Two Way Data Binding";

  name2:string="structural-directive Binding";
  isGuest=false;
  isAdmin=true;

}
