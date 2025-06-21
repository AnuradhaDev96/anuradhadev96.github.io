import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServiceDetailsComponent } from './views/service-details/service-details.component';
import { PortfolioDetailsComponent } from './views/portfolio-details/portfolio-details.component';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';
import { HomeComponent } from './views/home/home.component';
import { ResumeComponent } from './views/resume/resume.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'service-details', component: ServiceDetailsComponent},
    {path: 'portfolio-details', component: PortfolioDetailsComponent},
    {path: 'resume', component: ResumeComponent},
    {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}