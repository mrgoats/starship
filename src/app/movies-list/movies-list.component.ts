import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesListService } from './movies-list.service';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: any;
  url: string = 'https://swapi.co/api/films';

  constructor(private _movieListService : MoviesListService) { }

  ngOnInit() {
    this.movies = this._movieListService.getMovies().then(this.arrangeMovies);

    console.log(this.movies);
  }

  private arrangeMovies(res: Response){
    //4 5 6 1 2 3 7 8 9 ...

    let _movies = (<any>res);
    _movies.sort((a,b) => {
      return a.episode_id - b.episode_id;
    });

    let firstTrilogy = _movies.slice(0,3);
    let lateTrilogy = _movies.slice(3,6);
    let latest = _movies.slice(6,7);
    let ordered = lateTrilogy.concat(firstTrilogy).concat(latest);
    
    console.log(ordered);

    return ordered;
  }

}
