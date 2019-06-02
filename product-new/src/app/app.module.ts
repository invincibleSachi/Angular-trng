import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContractComponent } from './components/contract/contract.component';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {FormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import {Routes, RouterModule} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http'

const routes:Routes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  },
  {
    path:'products',
    loadChildren:'./product/product.module#ProductModule'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContractComponent,
    CounterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,SharedModule,CartModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
