import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// page components
import { LandingComponent } from './src/app/pages/landing/landing.component';
import { CreateProjectComponent } from './src/app/pages/create-project/create-project.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'create-project',
    component: CreateProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
