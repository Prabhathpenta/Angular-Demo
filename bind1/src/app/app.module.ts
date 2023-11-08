import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './my-components/my-component';
import { HeaderComponent } from './header/header.component';
import { TopicPipePipe } from './topic-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    HeaderComponent,
    TopicPipePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
