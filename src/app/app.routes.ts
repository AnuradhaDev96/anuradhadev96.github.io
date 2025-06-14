import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServiceDetailsComponent } from './views/service-details/service-details.component';
import { PortfolioDetailsComponent } from './views/portfolio-details/portfolio-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: AppComponent, pathMatch: 'full'},
    {path: 'service-details', component: ServiceDetailsComponent},
    {path: 'portfolio-details', component: PortfolioDetailsComponent},
    {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}