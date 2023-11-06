import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './my-components/my-component';
import { HeaderComponent } from './header/header.component';
import { Form2wayComponent } from './form2way/form2way.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    HeaderComponent,
    Form2wayComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
