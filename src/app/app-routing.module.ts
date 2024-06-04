import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BrochureComponent } from './components/brochure/brochure.component';
import { IROUTE_PATH } from './model/route-path';

const routes: Routes = [
  { path: IROUTE_PATH.HOME, component: HomeComponent },
  { path: IROUTE_PATH.ABOUT, component: AboutComponent },
  { path: IROUTE_PATH.BROCHURE, component: BrochureComponent },
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
