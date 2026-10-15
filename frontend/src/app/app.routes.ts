import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPage } from './pages/landing-page/landing-page';
import { MatchPage } from './pages/match-page/match-page';

export const routes: Routes = [
 { path: '', component: LandingPage},
 { path: 'match', component: MatchPage },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
