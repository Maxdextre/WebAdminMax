import { NgModule } from '@angular/core';
//Iniciar scripts


import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CareersComponent } from './careers/careers.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'carreras',
    component: CareersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CareersComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
