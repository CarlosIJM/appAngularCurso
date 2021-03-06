import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FechaActualComponent } from './fechaActual/fechaActual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EjemetodoComponent } from './ejemetodo/ejemetodo.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaActualComponent,
    CopyrightComponent,
    ViewmodeloComponent,
    EjemetodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
