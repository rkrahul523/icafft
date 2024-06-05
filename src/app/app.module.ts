import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { BrochureComponent } from './components/brochure/brochure.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContentHomeComponent } from './components/content-home/content-home.component';
import { AboutFoundryComponent } from './components/home-views/about-foundry/about-foundry.component';
import { AboutIILComponent } from './components/home-views/about-iil/about-iil.component';
import { ConferenceCommitteeComponent } from './components/home-views/conference-committee/conference-committee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BrochureComponent,
    LandingPageComponent,
    CarouselComponent,
    ContentHomeComponent,
    AboutFoundryComponent,
    AboutIILComponent,
    ConferenceCommitteeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
