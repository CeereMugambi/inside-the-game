import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPage } from '../pages/landing-page/landing-page';

export const routes: Routes = [
 { path: '', component: LandingPage},
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
