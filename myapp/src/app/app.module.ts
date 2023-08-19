import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TypingComponent } from './components/typing/typing.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Animasyonları ekleyin
import { ToastrModule } from 'ngx-toastr';
import { BlogComponent } from './components/blog/blog.component'; // ToastyModule'ü ekleyin


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    BlogComponent,
    PortfolioComponent,
    HamburgerComponent,
    FooterComponent,
    LogoComponent,
    TypingComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // Animasyonları ekleyin
    ToastrModule.forRoot() // ToastyModule'ü ekleyin
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
