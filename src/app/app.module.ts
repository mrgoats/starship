import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesListService } from './movies-list/movies-list.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'movies/:id', component: MovieDetailsComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    NgbModule.forRoot()
  ],
  providers: [
    MoviesListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
