import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/housing/housingView/housingView.component';
import { HousingDetailComponent } from './pages/housing/housingDetail/housingDetail.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent)
  },
  {
    path: 'details',
    component: HousingDetailComponent,
    title: 'Details'
  },
  {
    path: 'details/:id',
    component: HousingDetailComponent,
    title: 'Details'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
