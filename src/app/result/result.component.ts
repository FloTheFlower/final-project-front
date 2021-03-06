import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent  {

  movies: any;
  // movie: any;

  constructor(
    public _movieService: MovieService,
    private _apiService: ApiService,
    private router: Router,
    private _http: HttpClient
    ) { }

  ngOnInit() {}

  addToFavorites(movie){
    this._movieService.addToFavorites(movie).subscribe( (res: any) => {

      this.goTofavs();
    })
  }

  goTofavs() {
    this.router.navigate(['/facvourite'])
  }
  }
