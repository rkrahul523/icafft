import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BrochureComponent } from './components/brochure/brochure.component';
import { IROUTE_PATH } from './model/route-path';
import { SponsorshipComponent } from './components/routes-view/sponsorship/sponsorship.component';
import { ConferenceCommitteeComponent } from './components/routes-view/conference-committee/conference-committee.component';
import { ContentHomeComponent } from './components/content-home/content-home.component';
import { AboutIILComponent } from './components/home-views/about-iil/about-iil.component';
import { AboutFoundryComponent } from './components/home-views/about-foundry/about-foundry.component';
import { AccountDetailsComponent } from './components/routes-view/account-details/account-details.component';

const routes: Routes = [
  { path: IROUTE_PATH.HOME, component: HomeComponent },
  { path: IROUTE_PATH.ABOUT, component: AboutComponent },
  { path: IROUTE_PATH.BROCHURE, component: BrochureComponent },
  { path: IROUTE_PATH.SPONSORSHIP, component: SponsorshipComponent },
  { path: IROUTE_PATH.COMMITTEE, component: ConferenceCommitteeComponent },
  { path: IROUTE_PATH.NIAMT, component: ContentHomeComponent },
  { path: IROUTE_PATH.IIL, component: AboutIILComponent },
  { path: IROUTE_PATH.FFT, component: AboutFoundryComponent },
  { path: IROUTE_PATH.ACCOUNT, component: AccountDetailsComponent },
  {
    path: '',
    redirectTo: IROUTE_PATH.HOME,
    pathMatch: 'full'
  }
  // { path: 'commitee', component: CommiteeComponent },
  // { path: 'abstract', component: AbstractComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'alumni', component: AlumniComponent },
  // { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
