import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DataArrayService } from './data-array.service';

//configure routes/paths

const routes:Routes =[
  {path : '', component: HomeComponent},
  {path : 'Homme', component: HomeComponent},
  {path : 'about', component: AboutComponent},
  {path : 'contact', component: ContactComponent},
  //{path : '**', component:AboutComponent},
  // {path : '**', redirectTo:'/home',pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,[RouterModule.forRoot(routes)]
  ],
  providers: [DataArrayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
