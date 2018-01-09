import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { MainComponent } from './core/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopBarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
