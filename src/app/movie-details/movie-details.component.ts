import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesListService } from '../movies-list/movies-list.service';

@Component({
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _movieListService: MoviesListService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');

    this._movieListService.getMovieById(id).then(
      data => { this.movie = data; }
    );
  }

  onBack(): void {
    this._router.navigate(['/movies']);
  }

}
