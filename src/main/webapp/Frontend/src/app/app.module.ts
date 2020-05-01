import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserAccountComponent } from './account-user/user-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { MovieComponent } from './movie/movie.component';
import { ReviewComponent } from './review/review.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserAccountComponent,
    DashboardComponent,
    CreateaccountComponent,
    SearchMoviesComponent,
    MovieComponent,
    ReviewComponent,
    CreateReviewComponent,
    UpdatepasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
