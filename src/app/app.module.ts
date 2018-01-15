import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { MainComponent } from './core/main/main.component';
import { HomeComponent } from './content/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { OpinionsComponent } from './content/opinions/opinions.component';
import { MyworkComponent } from './content/mywork/mywork.component';
import { ContactComponent } from './content/contact/contact.component';
import { AboutComponent } from './content/about/about.component';
import { NavStateDirective } from './shared/navstate.directive';
import { TopBarStateDirective } from './shared/topbarstate.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavStateDirective,
    TopBarStateDirective,
    NavbarComponent,
    TopBarComponent,
    MainComponent,
    HomeComponent,
    OpinionsComponent,
    MyworkComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
