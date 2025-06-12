import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServiceDetailsComponent } from './views/service-details/service-details.component';
import { PortfolioDetailsComponent } from './views/portfolio-details/portfolio-details.component';

export const routes: Routes = [
    {path: 'service-details', component: ServiceDetailsComponent},
    {path: 'portfolio-details', component: PortfolioDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}