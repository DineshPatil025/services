import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Accord1Component } from './shared/components/accord1/accord1.component';
import { Accord2Component } from './shared/components/accord2/accord2.component';

@NgModule({
  declarations: [
    AppComponent,
    Accord1Component,
    Accord2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
