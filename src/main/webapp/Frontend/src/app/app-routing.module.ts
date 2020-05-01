import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { UserAccountComponent } from './account-user/user-account.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MovieComponent} from './movie/movie.component';
import { ReviewComponent } from './review/review.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'redirect-Nreview', redirectTo: 'createreview', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent,  pathMatch: 'full' },
  { path: 'searchmovies', component: SearchMoviesComponent, pathMatch: 'full' },
  { path: 'createaccount', component: CreateaccountComponent, pathMatch: 'full' },
  { path: 'account-user', component: UserAccountComponent, pathMatch: 'full' },
  { path: 'review', component: ReviewComponent, pathMatch: 'full' },
  { path: 'createaccount', component: CreateaccountComponent, pathMatch: 'full' },
  { path: 'movie', component: MovieComponent, pathMatch: 'full' },
  { path: 'createreview', component: CreateReviewComponent, pathMatch: 'full' },
  { path: 'updatepassword', component: UpdatepasswordComponent, pathMatch: 'full' }

 // { path: 'login', redirectTo: '/Login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
